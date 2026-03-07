"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="flex h-screen w-screen">
          <AppSidebar />
          <main className="flex-1 overflow-auto bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  )
}
