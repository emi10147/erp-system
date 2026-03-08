"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="flex h-screen w-screen">
          {/* Desktop Sidebar - Hidden on mobile */}
          <div className="hidden lg:block">
            <AppSidebar />
          </div>

          {/* Mobile Top Nav + Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Mobile Navigation Bar */}
            <div className="lg:hidden bg-zinc-900 border-b border-emerald-500/50 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">F</span>
                </div>
                <span className="text-white font-semibold text-sm">Fries Control</span>
              </div>

              {/* Mobile Menu Sheet */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 hover:bg-emerald-500/20 rounded-md transition-colors border border-emerald-500/50">
                    <Menu className="w-6 h-6 text-emerald-400" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-zinc-950 border-zinc-800 p-0 w-3/4 max-w-sm">
                  <div className="p-6">
                    <AppSidebar />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-auto bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  )
}
