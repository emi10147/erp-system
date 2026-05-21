"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Warehouse,
  Factory,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  ChevronDown,
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
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuBadge,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const navItems = [
  { icon: LayoutDashboard, label: "Panel de Control", href: "/" },
  { icon: Warehouse, label: "Inventario", href: "/inventory" },
  { icon: Factory, label: "Manufactura", href: "/manufacturing" },
  { icon: ShoppingCart, label: "Pedidos", href: "/orders" },
  { icon: Users, label: "Gestión de Personal", href: "/hr" },
]

const inventorySubItems = [
  { label: "Insumos", href: "/inventory" },
  { label: "Materia Prima", href: "/inventory/materia-prima" },
  { label: "Producto Terminado", href: "/inventory/producto-terminado" },
]

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isInventoryOpen, setIsInventoryOpen] = useState(
    pathname.startsWith("/inventory")
  )

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
    <Sidebar className="bg-black border-cyan-500/20 backdrop-blur-xl" style={{boxShadow: '0 0 30px rgba(0, 234, 255, 0.1), inset -2px 0 10px rgba(0, 234, 255, 0.05)'}}>
      {/* Header */}
      <SidebarHeader className="border-cyan-500/15 pb-4">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-xl flex items-center justify-center transition-all duration-300" style={{boxShadow: '0 0 20px rgba(0, 234, 255, 0.5)'}}>
            <Factory className="w-6 h-6 text-black" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold text-white">Factory ERP</h1>
            <p className="text-xs text-cyan-300/60">Sistema Integrado</p>
          </div>
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="border-cyan-500/15">
        <SidebarMenu>
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            const isInventory = item.href === "/inventory"

            if (isInventory) {
              return (
                <Collapsible
                  key={item.href}
                  open={isInventoryOpen}
                  onOpenChange={setIsInventoryOpen}
                  className="w-full"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                        className={`w-full transition-all duration-300 rounded-lg mx-1 group ${
                          isInventoryOpen
                            ? "bg-cyan-500/15 text-cyan-300 border-l-4 border-cyan-500"
                            : "text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                        }`}
                        style={isInventoryOpen ? {boxShadow: '0 0 20px rgba(0, 234, 255, 0.25), inset 0 2px 5px rgba(0, 234, 255, 0.1)'} : {}}
                      >
                        <Icon className="w-5 h-5 mr-3 icon-glow" />
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown className="ml-auto w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="ml-2 mt-2 space-y-1">
                        {inventorySubItems.map((subItem) => {
                          const isSubActive = pathname === subItem.href
                          return (
                            <SidebarMenuSubItem key={subItem.href}>
                              <SidebarMenuSubButton
                                asChild
                                className={`w-full transition-all duration-300 rounded-lg ${
                                  isSubActive
                                    ? "bg-cyan-500/20 text-cyan-300 border-l-2 border-cyan-500 font-semibold"
                                    : "text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                                }`}
                                style={isSubActive ? {boxShadow: '0 0 15px rgba(0, 234, 255, 0.2)'} : {}}
                              >
                                <Link href={subItem.href} className="w-full">
                                  <span className="text-sm">{subItem.label}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          )
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )
            }

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  className={`w-full transition-all duration-300 rounded-lg mx-1 ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border-l-4 border-cyan-500"
                      : "text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                  }`}
                  style={isActive ? {boxShadow: '0 0 20px rgba(0, 234, 255, 0.25), inset 0 2px 5px rgba(0, 234, 255, 0.1)'} : {}}
                >
                  <Link href={item.href} className="w-full flex items-center">
                    <Icon className="w-5 h-5 mr-3 icon-glow" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-cyan-500/15">
        <Separator className="bg-cyan-500/20" />
        
        {/* System Status */}
        <div className="mt-4 p-4 rounded-xl bg-black border border-cyan-500/30 backdrop-blur-xl transition-all duration-300" style={{boxShadow: '0 0 15px rgba(0, 234, 255, 0.15), inset 0 0 10px rgba(0, 234, 255, 0.05)'}}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{boxShadow: '0 0 8px rgba(0, 234, 255, 0.8)'}} />
            <span className="text-xs font-semibold text-cyan-300">Sistema Activo</span>
          </div>
          <p className="text-xs text-cyan-300/60">Todos los servicios operando</p>
        </div>

        {/* Settings */}
        <SidebarMenu className="mt-4 space-y-2">
          <SidebarMenuItem>
            <SidebarMenuButton 
              onClick={() => router.push("/settings")}
              className="w-full text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
            >
              <Settings className="w-5 h-5 mr-3 icon-glow" strokeWidth={2.5} />
              <span className="font-medium">Configuración</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          {/* Logout */}
          <SidebarMenuItem>
            <SidebarMenuButton 
              onClick={handleLogout}
              disabled={isLoading}
              className="w-full text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-300 disabled:opacity-50"
            >
              <LogOut className="w-5 h-5 mr-3 icon-glow" strokeWidth={2.5} />
              <span className="font-medium">{isLoading ? "Cerrando..." : "Cerrar Sesión"}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
