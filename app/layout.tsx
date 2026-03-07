import type { Metadata } from "next"
import { LayoutClient } from "@/components/layout-client"
import "./globals.css"
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Fries Control v1.0 | Factory ERP",
  description: "Professional frozen fries factory ERP system",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <body className="bg-zinc-950">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}

