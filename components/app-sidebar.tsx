"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Warehouse,
  Factory,
  ShoppingCart,
  Settings,
} from "lucide-react"

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

const navItems = [
  { icon: LayoutDashboard, label: "Panel de Control", href: "/" },
  { icon: Warehouse, label: "Inventario", href: "/inventory" },
  { icon: Factory, label: "Producción", href: "/production" },
  { icon: ShoppingCart, label: "Pedidos", href: "/orders" },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-slate-950/95 border-slate-700/50 backdrop-blur-sm">
      {/* Header */}
      <SidebarHeader className="border-slate-700/30 pb-4">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
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
                        ? "bg-gradient-to-r from-emerald-500/30 to-emerald-600/20 text-emerald-300 border-l-4 border-emerald-500 shadow-lg shadow-emerald-500/20"
                        : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 hover:border-l-4 hover:border-emerald-500/30"
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
        <div className="mt-4 p-4 rounded-xl bg-slate-800/50 border border-emerald-500/20 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50" />
            <span className="text-xs font-semibold text-slate-200">Sistema Activo</span>
          </div>
          <p className="text-xs text-slate-400">Todos los servicios operando correctamente</p>
        </div>

        {/* Settings */}
        <SidebarMenu className="mt-4">
          <SidebarMenuItem>
            <Link href="/settings" className="w-full">
              <SidebarMenuButton className="w-full text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-lg transition-all duration-300">
                <Settings className="w-5 h-5 mr-3" />
                <span className="font-medium">Configuración</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
