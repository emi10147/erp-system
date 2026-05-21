import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const year = parseInt(searchParams.get("year") || new Date().getFullYear().toString())
    const month = parseInt(searchParams.get("month") || (new Date().getMonth() + 1).toString())

    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month, 0, 23, 59, 59)

    const attendance = await prisma.attendance.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        employee: true,
      },
      orderBy: [{ employee: { name: "asc" } }, { date: "asc" }],
    })

    return NextResponse.json(attendance)
  } catch (error) {
    console.error("Error fetching attendance:", error)
    return NextResponse.json({ error: "Failed to fetch attendance" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { employee_id, date, hours_worked } = body

    if (!employee_id || !date || hours_worked === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Parse "2026-03-10" format correctly
    const [year, month, day] = date.split('-').map(Number)
    const parsedDate = new Date(year, month - 1, day, 0, 0, 0, 0)  // Local midnight

    console.log(`[API POST] Received: employee_id=${employee_id}, date=${date}, hours=${hours_worked}`)
    console.log(`[API POST] Parsed date: ${parsedDate.toString()}`)

    const attendance = await prisma.attendance.upsert({
      where: {
        employee_id_date: {
          employee_id,
          date: parsedDate,
        },
      },
      update: {
        hours_worked: parseFloat(hours_worked),
      },
      create: {
        employee_id,
        date: parsedDate,
        hours_worked: parseFloat(hours_worked),
      },
      include: {
        employee: true,
      },
    })

    console.log(`[API POST] Success: Saved attendance record with id=${attendance.id}`)
    return NextResponse.json(attendance)
  } catch (error) {
    console.error("Error updating attendance:", error)
    return NextResponse.json({ error: "Failed to update attendance" }, { status: 500 })
  }
}
