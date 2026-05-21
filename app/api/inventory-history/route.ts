import { db } from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const productId = searchParams.get("productId")

    let logs

    if (productId) {
      // Get history for a specific product
      logs = await db.inventoryLog.findMany({
        where: {
          product_id: productId,
        },
        orderBy: {
          createdAt: "asc",
        },
        include: {
          product: {
            select: {
              id: true,
              name: true,
              sku: true,
              category: true,
            },
          },
        },
      })

      const formattedLogs = logs.map((log: any) => ({
        id: log.id,
        product: log.product,
        date: log.createdAt.toISOString().split("T")[0],
        quantity: log.quantity,
        reason: log.reason,
        createdAt: log.createdAt.toISOString(),
      }))

      return NextResponse.json({ logs: formattedLogs }, { status: 200 })
    } else {
      // Get all products with their inventory logs grouped by product NAME (consolidation)
      const products = await db.product.findMany({
        include: {
          inventoryLogs: {
            orderBy: {
              createdAt: "asc",
            },
          },
        },
      })

      // Group by product NAME and consolidate history by date with quantity sums
      const groupedByName = new Map<string, any>()

      products.forEach((product) => {
        if (product.inventoryLogs.length === 0) return

        const key = `${product.name}|${product.category}`

        if (!groupedByName.has(key)) {
          groupedByName.set(key, {
            product: {
              id: product.id,
              name: product.name,
              sku: product.sku,
              category: product.category,
              currentStock: product.current_stock,
            },
            allLogs: [],
          })
        }

        const entry = groupedByName.get(key)
        entry.allLogs.push(...product.inventoryLogs)
      })

      // Convert to array and consolidate history by date with sums
      const formattedData = Array.from(groupedByName.values())
        .map((item) => {
          // Sort all logs by date
          const sortedLogs = item.allLogs.sort(
            (a: any, b: any) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          )

          // Group by date and sum quantities
          const historyByDate = new Map<string, any>()

          sortedLogs.forEach((log: any) => {
            const dateStr = log.createdAt.toISOString().split("T")[0]

            if (!historyByDate.has(dateStr)) {
              historyByDate.set(dateStr, {
                date: dateStr,
                quantity: 0,
                reason: log.reason,
                createdAt: log.createdAt.toISOString(),
                timestamp: log.createdAt.getTime(),
              })
            }

            const dateEntry = historyByDate.get(dateStr)
            dateEntry.quantity += log.quantity
          })

          // Convert to array and sort by date
          const consolidatedHistory = Array.from(historyByDate.values()).sort(
            (a: any, b: any) => a.timestamp - b.timestamp
          )

          return {
            product: item.product,
            history: consolidatedHistory,
          }
        })
        .filter((item) => item.history.length > 0) // Only include if has history

      return NextResponse.json({ products: formattedData }, { status: 200 })
    }
  } catch (error) {
    console.error("Error fetching inventory history:", error)
    return NextResponse.json(
      { error: "Failed to fetch inventory history" },
      { status: 500 }
    )
  }
}
