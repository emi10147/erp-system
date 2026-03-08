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
            <div className="lg:hidden bg-gradient-to-r from-slate-900/80 via-slate-950/80 to-slate-900/80 backdrop-blur-md border-b border-emerald-500/30 px-4 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <span className="text-white text-xs font-bold">ERP</span>
                </div>
                <span className="text-white font-bold text-base">Factory Control</span>
              </div>

              {/* Mobile Menu Sheet */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 hover:bg-emerald-500/20 rounded-lg transition-all duration-300 border border-emerald-500/50 active:scale-95">
                    <Menu className="w-6 h-6 text-emerald-400" strokeWidth={2.5} />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 p-0 w-3/4 max-w-sm shadow-2xl">
                  <div className="p-6 mt-4">
                    <AppSidebar />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  )
}
