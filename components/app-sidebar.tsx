"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Warehouse,
  Factory,
  ShoppingCart,
  Settings,
  LogOut,
} from "lucide-react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const navItems = [
  { icon: LayoutDashboard, label: "Panel de Control", href: "/" },
  { icon: Warehouse, label: "Inventario", href: "/inventory" },
  { icon: Factory, label: "Producción", href: "/production" },
  { icon: ShoppingCart, label: "Pedidos", href: "/orders" },
]

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/login")
      router.refresh()
    } catch (error) {
      console.error("Error al cerrar sesión:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Sidebar className="bg-black border-slate-700/50 backdrop-blur-sm">
      {/* Header */}
      <SidebarHeader className="border-slate-700/30 pb-4">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Factory className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold text-white">Factory ERP</h1>
            <p className="text-xs text-slate-400">Sistema Integrado</p>
          </div>
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="border-slate-700/30">
        <SidebarMenu>
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href} className="w-full">
                  <SidebarMenuButton
                    className={`w-full transition-all duration-300 rounded-lg mx-1 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500/30 to-cyan-600/20 text-blue-300 border-l-4 border-blue-500 shadow-lg shadow-blue-500/20"
                        : "text-slate-400 hover:text-slate-100 hover:bg-blue-900/20 hover:border-l-4 hover:border-blue-500/30"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <span className="font-medium">{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-slate-700/30">
        <Separator className="bg-slate-700/30" />
        
        {/* System Status */}
        <div className="mt-4 p-4 rounded-xl bg-black border border-blue-500/20 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50" />
            <span className="text-xs font-semibold text-slate-200">Sistema Activo</span>
          </div>
          <p className="text-xs text-slate-400">Todos los servicios operando correctamente</p>
        </div>

        {/* Settings */}
        <SidebarMenu className="mt-4 space-y-2">
          <SidebarMenuItem>
            <button
              onClick={() => router.push("/settings")}
              className="w-full text-left"
            >
              <SidebarMenuButton className="w-full text-slate-400 hover:text-slate-100 hover:bg-blue-900/20 rounded-lg transition-all duration-300">
                <Settings className="w-5 h-5 mr-3" strokeWidth={2.5} />
                <span className="font-medium">Configuración</span>
              </SidebarMenuButton>
            </button>
          </SidebarMenuItem>
          
          {/* Logout */}
          <SidebarMenuItem>
            <button
              onClick={handleLogout}
              disabled={isLoading}
              className="w-full text-left"
            >
              <SidebarMenuButton className="w-full text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-300 disabled:opacity-50">
                <LogOut className="w-5 h-5 mr-3" strokeWidth={2.5} />
                <span className="font-medium">{isLoading ? "Cerrando..." : "Cerrar Sesión"}</span>
              </SidebarMenuButton>
            </button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
