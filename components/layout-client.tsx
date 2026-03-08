"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
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
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      // If on login page, don't check auth
      if (pathname === "/login") {
        setIsChecking(false)
        return
      }

      try {
        // Verify session with API
        const response = await fetch("/api/auth/verify", {
          method: "GET",
          credentials: "include", // Include cookies in request
        })

        if (response.ok) {
          setIsChecking(false)
        } else {
          // Redirect to login if session not valid
          router.push("/login")
        }
      } catch (error) {
        // On error, redirect to login
        router.push("/login")
      }
    }

    checkAuth()
  }, [pathname, router])

  return (
    <TooltipProvider>
      <SidebarProvider>
        {/* Show loading state while checking auth */}
        {isChecking && pathname !== "/login" ? (
          <div className="w-screen h-screen bg-black flex items-center justify-center">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 animate-pulse">
                  <span className="text-white text-sm font-bold">ERP</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm font-medium">Verificando sesión...</p>
            </div>
          </div>
        ) : (
        <div className="flex h-screen w-screen">
          {/* Desktop Sidebar - Hidden on mobile, Hidden on login page */}
          {pathname !== "/login" && (
            <div className="hidden lg:block">
              <AppSidebar />
            </div>
          )}

          {/* Mobile Top Nav + Main Content */}
          <div className={`${pathname === "/login" ? "w-full" : "flex-1"} flex flex-col`}>
            {/* Mobile Navigation Bar - Hidden on login */}
            {pathname !== "/login" && (
            <div className="lg:hidden bg-black/80 backdrop-blur-md border-b border-blue-500/30 px-4 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <span className="text-white text-xs font-bold">ERP</span>
                </div>
                <span className="text-white font-bold text-base">Factory Control</span>
              </div>

              {/* Mobile Menu Sheet */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 hover:bg-blue-500/20 rounded-lg transition-all duration-300 border border-blue-500/50 active:scale-95">
                    <Menu className="w-6 h-6 text-blue-400" strokeWidth={2.5} />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 p-0 w-3/4 max-w-sm shadow-2xl">
                  <div className="p-6 mt-4">
                    <AppSidebar />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            )}

            {/* Main Content */}
            <main className="flex-1 overflow-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
              {children}
            </main>
          </div>
        </div>
        )}
      </SidebarProvider>
    </TooltipProvider>
  )
}
