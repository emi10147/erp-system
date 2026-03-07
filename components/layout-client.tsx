"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
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
            <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">F</span>
                </div>
                <span className="text-white font-semibold text-sm">Fries Control</span>
              </div>

              {/* Mobile Menu Sheet */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 hover:bg-zinc-900 rounded-md transition-colors">
                    <Menu className="w-5 h-5 text-white" />
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
