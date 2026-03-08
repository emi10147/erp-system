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
    <Sidebar className="bg-zinc-950 border-zinc-800">
      {/* Header */}
      <SidebarHeader className="border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Factory className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold text-white">Fries Control</h1>
            <p className="text-xs text-zinc-400">v1.0</p>
          </div>
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="border-zinc-800">
        <SidebarMenu>
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href} className="w-full">
                  <SidebarMenuButton
                    className={`w-full transition-all ${
                      isActive
                        ? "bg-emerald-500/20 text-emerald-400 border-l-2 border-emerald-500"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-zinc-800">
        <Separator className="bg-zinc-800" />
        
        {/* System Status */}
        <div className="mt-4 p-3 rounded-lg bg-zinc-900 border border-zinc-800">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-zinc-300">Estado del Sistema</span>
          </div>
          <p className="text-xs text-zinc-400">Todos los sistemas operando</p>
        </div>

        {/* Settings */}
        <SidebarMenu className="mt-4">
          <SidebarMenuItem>
            <Link href="/settings" className="w-full">
              <SidebarMenuButton className="w-full text-zinc-400 hover:text-white hover:bg-zinc-900">
                <Settings className="w-4 h-4 mr-3" />
                <span>Settings</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
