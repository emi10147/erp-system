"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Plus, Package, Pencil, Trash, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnalyticsCharts } from "@/components/analytics-charts"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { createProduct, updateProduct, deleteProduct } from "@/app/actions/inventory"

interface Product {
  id: string
  name: string
  sku: string
  category: "RAW_MATERIAL" | "FINISHED_GOOD" | "PACKAGING"
  type: "CRINKLE_CUT" | "STEAKHOUSE_CUT" | "NORMAL_CUT"
  location?: "CUARTO_FRIO_1" | "CUARTO_FRIO_2" | "ALMACEN_GENERAL"
  current_stock: number
  unit_cost?: number
  provider?: string
}

type TabType = "PACKAGING" | "RAW_MATERIAL" | "FINISHED_GOOD"

const TABS: { id: TabType; label: string; description: string }[] = [
  { id: "PACKAGING", label: "Insumos", description: "Aceite, sal y empaques" },
  { id: "RAW_MATERIAL", label: "Materia Prima", description: "Papas crudas y materiales" },
  { id: "FINISHED_GOOD", label: "Producto Terminado", description: "Productos listos para vender" },
]

export default function InventoryPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabType>("PACKAGING")
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAddInsumoOpen, setIsAddInsumoOpen] = useState(false)
  const [isAddMateriaOpen, setIsAddMateriaOpen] = useState(false)
  const [isAddProductoOpen, setIsAddProductoOpen] = useState(false)
  const [isEditSheetOpen, setIsEditSheetOpen] = useState(false)
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<Product | null>(null)
  
  // Insumo form state
  const [insumoFormData, setInsumoFormData] = useState({
    name: "",
    sku: "",
    category: "PACKAGING" as const,
    type: "NORMAL_CUT",
    location: "ALMACEN_GENERAL" as const,
    current_stock: "",
    unit_cost: "",
    provider: "",
  })

  // Materia Prima form state
  const [materiaFormData, setMateriaFormData] = useState({
    name: "",
    sku: "",
    category: "RAW_MATERIAL" as const,
    type: "NORMAL_CUT",
    location: "",
    current_stock: "",
    unit_cost: "",
    provider: "",
  })

  // Producto Terminado form state
  const [productoFormData, setProductoFormData] = useState({
    name: "",
    sku: "",
    category: "FINISHED_GOOD" as const,
    type: "NORMAL_CUT",
    location: "",
    current_stock: "",
    unit_cost: "",
    provider: "",
  })
  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    sku: "",
    category: "",
    type: "NORMAL_CUT",
    location: "",
    current_stock: "",
    unit_cost: "",
    provider: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/inventory")
      if (response.ok) {
        const data = await response.json()
        setProducts(data.products || [])
      }
    } catch (error) {
      console.error("Failed to fetch products:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const filteredProducts = products.filter((p) => p.category === activeTab)

  const handleInsumoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!insumoFormData.name || !insumoFormData.sku || !insumoFormData.current_stock) {
      alert("Por favor, completa todos los campos requeridos")
      return
    }

    try {
      setIsSubmitting(true)
      const result = await createProduct({
        name: insumoFormData.name,
        sku: insumoFormData.sku,
        category: "PACKAGING",
        type: insumoFormData.type as "CRINKLE_CUT" | "STEAKHOUSE_CUT" | "NORMAL_CUT",
        location: "ALMACEN_GENERAL",
        current_stock: parseInt(insumoFormData.current_stock),
        unit_cost: insumoFormData.unit_cost ? parseFloat(insumoFormData.unit_cost) : undefined,
        provider: insumoFormData.provider || undefined,
      })

      if (result.success) {
        setInsumoFormData({ name: "", sku: "", category: "PACKAGING", type: "NORMAL_CUT", location: "ALMACEN_GENERAL", current_stock: "", unit_cost: "", provider: "" })
        setIsAddInsumoOpen(false)
        fetchProducts()
        alert(result.message)
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al crear el insumo")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleMateriaSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!materiaFormData.name || !materiaFormData.sku || !materiaFormData.current_stock) {
      alert("Por favor, completa todos los campos requeridos")
      return
    }

    try {
      setIsSubmitting(true)
      const result = await createProduct({
        name: materiaFormData.name,
        sku: materiaFormData.sku,
        category: "RAW_MATERIAL",
        type: materiaFormData.type as "CRINKLE_CUT" | "STEAKHOUSE_CUT" | "NORMAL_CUT",
        location: undefined,
        current_stock: parseInt(materiaFormData.current_stock),
        unit_cost: undefined,
        provider: undefined,
      })

      if (result.success) {
        setMateriaFormData({ name: "", sku: "", category: "RAW_MATERIAL", type: "NORMAL_CUT", location: "", current_stock: "", unit_cost: "", provider: "" })
        setIsAddMateriaOpen(false)
        fetchProducts()
        alert(result.message)
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al crear la materia prima")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleProductoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!productoFormData.name || !productoFormData.sku || !productoFormData.current_stock || !productoFormData.location) {
      alert("Por favor, completa todos los campos requeridos")
      return
    }

    try {
      setIsSubmitting(true)
      const result = await createProduct({
        name: productoFormData.name,
        sku: productoFormData.sku,
        category: "FINISHED_GOOD",
        type: productoFormData.type as "CRINKLE_CUT" | "STEAKHOUSE_CUT" | "NORMAL_CUT",
        location: productoFormData.location as "CUARTO_FRIO_1" | "CUARTO_FRIO_2" | "ALMACEN_GENERAL" || undefined,
        current_stock: parseInt(productoFormData.current_stock),
        unit_cost: undefined,
        provider: undefined,
      })

      if (result.success) {
        setProductoFormData({ name: "", sku: "", category: "FINISHED_GOOD", type: "NORMAL_CUT", location: "", current_stock: "", unit_cost: "", provider: "" })
        setIsAddProductoOpen(false)
        fetchProducts()
        alert(result.message)
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al crear el producto terminado")
    } finally {
      setIsSubmitting(false)
    }
  }

  const openEditSheet = (product: Product) => {
    setEditFormData({
      id: product.id,
      name: product.name,
      sku: product.sku,
      category: product.category,
      type: product.type,
      location: product.location || "",
      current_stock: product.current_stock.toString(),
      unit_cost: product.unit_cost?.toString() || "",
      provider: product.provider || "",
    })
    setIsEditSheetOpen(true)
  }

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editFormData.name || !editFormData.sku || !editFormData.category || !editFormData.current_stock) {
      alert("Por favor, completa todos los campos requeridos")
      return
    }

    try {
      setIsSubmitting(true)
      const result = await updateProduct({
        id: editFormData.id,
        name: editFormData.name,
        sku: editFormData.sku,
        category: editFormData.category as "RAW_MATERIAL" | "FINISHED_GOOD" | "PACKAGING",
        type: editFormData.type as "CRINKLE_CUT" | "STEAKHOUSE_CUT" | "NORMAL_CUT",
        location: editFormData.location as "CUARTO_FRIO_1" | "CUARTO_FRIO_2" | "ALMACEN_GENERAL" || undefined,
        current_stock: parseInt(editFormData.current_stock),
        unit_cost: editFormData.unit_cost ? parseFloat(editFormData.unit_cost) : undefined,
        provider: editFormData.provider || undefined,
      })

      if (result.success) {
        setEditFormData({ id: "", name: "", sku: "", category: "", type: "NORMAL_CUT", location: "", current_stock: "", unit_cost: "", provider: "" })
        setIsEditSheetOpen(false)
        fetchProducts()
        alert(result.message)
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al actualizar el producto")
    } finally {
      setIsSubmitting(false)
    }
  }

  const openDeleteAlert = (product: Product) => {
    setProductToDelete(product)
    setIsDeleteAlertOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!productToDelete) return

    try {
      setIsSubmitting(true)
      const result = await deleteProduct(productToDelete.id)

      if (result.success) {
        setIsDeleteAlertOpen(false)
        setProductToDelete(null)
        fetchProducts()
        alert(result.message)
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al eliminar el producto")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFriesTypeLabel = (type: string) => {
    switch (type) {
      case "CRINKLE_CUT":
        return "Corte Ondulado"
      case "STEAKHOUSE_CUT":
        return "Corte Steakhouse"
      case "NORMAL_CUT":
        return "Corte Normal"
      default:
        return type
    }
  }

  const getFriesTypeColor = (type: string) => {
    switch (type) {
      case "CRINKLE_CUT":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "STEAKHOUSE_CUT":
        return "bg-pink-500/20 text-pink-400 border-pink-500/30"
      case "NORMAL_CUT":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
      default:
        return "bg-zinc-500/20 text-zinc-400 border-zinc-500/30"
    }
  }

  const getLocationLabel = (location?: string) => {
    switch (location) {
      case "CUARTO_FRIO_1":
        return "Cuarto Frío 1"
      case "CUARTO_FRIO_2":
        return "Cuarto Frío 2"
      case "ALMACEN_GENERAL":
        return "Almacén General"
      default:
        return "Sin ubicación"
    }
  }

  const getLocationColor = (location?: string) => {
    switch (location) {
      case "CUARTO_FRIO_1":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "CUARTO_FRIO_2":
        return "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
      case "ALMACEN_GENERAL":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      default:
        return "bg-zinc-500/20 text-zinc-400 border-zinc-500/30"
    }
  }

  return (
    <div className="w-full min-h-screen p-4 sm:p-6 lg:p-8 bg-black">
      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="mb-6 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
        <span className="font-semibold text-sm">Volver al Panel</span>
      </button>

      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 lg:mb-10 gap-6">
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 lg:mb-3 flex items-center gap-3 tracking-tight">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Package className="w-7 sm:w-8 lg:w-9 h-7 sm:h-8 lg:h-9 text-blue-400" strokeWidth={2.5} />
            </div>
            Gestión de Inventario
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 font-medium">Administra productos separados por categoría</p>
        </div>
      </div>

      {/* Agregar Producto Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Agregar Insumo */}
        <Sheet open={isAddInsumoOpen} onOpenChange={setIsAddInsumoOpen}>
          <SheetTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-700 to-cyan-500 hover:shadow-lg hover:shadow-cyan-400/50 text-white h-auto rounded-lg transition-all duration-300 flex flex-col py-4">
              <Plus className="w-5 h-5 mb-2" strokeWidth={2.5} />
              <span>Agregar Insumo</span>
              <span className="text-xs text-cyan-100 font-normal">Aceite, sal y empaques</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 w-full sm:max-w-md shadow-2xl">
            <SheetHeader className="mt-6">
              <SheetTitle className="text-white text-2xl font-bold">Agregar Insumo</SheetTitle>
              <SheetDescription className="text-slate-400 font-medium">
                Crea un nuevo insumo (aceite, sal, empaques, etc.)
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleInsumoSubmit} className="space-y-5 mt-8 max-h-[calc(100vh-150px)] overflow-y-auto">
              <div className="space-y-2">
                <Label htmlFor="insumo-name" className="text-slate-300 text-sm font-semibold">
                  Nombre del Insumo
                </Label>
                <Input
                  id="insumo-name"
                  placeholder="Ej: Aceite Vegetal"
                  value={insumoFormData.name}
                  onChange={(e) => setInsumoFormData({ ...insumoFormData, name: e.target.value })}
                  className="input-modern"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="insumo-sku" className="text-slate-300 text-sm font-semibold">
                  SKU
                </Label>
                <Input
                  id="insumo-sku"
                  placeholder="Ej: INS-001"
                  value={insumoFormData.sku}
                  onChange={(e) => setInsumoFormData({ ...insumoFormData, sku: e.target.value })}
                  className="input-modern"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="insumo-stock" className="text-slate-300 text-sm font-semibold">
                  Existencias
                </Label>
                <Input
                  id="insumo-stock"
                  type="number"
                  placeholder="0"
                  min="0"
                  value={insumoFormData.current_stock}
                  onChange={(e) => setInsumoFormData({ ...insumoFormData, current_stock: e.target.value })}
                  className="input-modern"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="insumo-unitCost" className="text-slate-300 text-sm font-semibold">
                  Costo Unitario
                </Label>
                <Input
                  id="insumo-unitCost"
                  type="number"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  value={insumoFormData.unit_cost}
                  onChange={(e) => setInsumoFormData({ ...insumoFormData, unit_cost: e.target.value })}
                  className="input-modern"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="insumo-provider" className="text-slate-300 text-sm font-semibold">
                  Proveedor
                </Label>
                <Input
                  id="insumo-provider"
                  placeholder="Ej: Proveedor A"
                  value={insumoFormData.provider}
                  onChange={(e) => setInsumoFormData({ ...insumoFormData, provider: e.target.value })}
                  className="input-modern"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary h-12"
              >
                {isSubmitting ? "Guardando..." : "Crear Insumo"}
              </Button>
            </form>
          </SheetContent>
        </Sheet>

        {/* Agregar Materia Prima */}
        <Sheet open={isAddMateriaOpen} onOpenChange={setIsAddMateriaOpen}>
          <SheetTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-700 to-cyan-500 hover:shadow-lg hover:shadow-cyan-400/50 text-white h-auto rounded-lg transition-all duration-300 flex flex-col py-4">
              <Plus className="w-5 h-5 mb-2" strokeWidth={2.5} />
              <span>Agregar Materia Prima</span>
              <span className="text-xs text-cyan-100 font-normal">Papas y materiales</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 w-full sm:max-w-md shadow-2xl">
            <SheetHeader className="mt-6">
              <SheetTitle className="text-white text-2xl font-bold">Agregar Materia Prima</SheetTitle>
              <SheetDescription className="text-slate-400 font-medium">
                Crea un nuevo lote de materia prima
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleMateriaSubmit} className="space-y-5 mt-8 max-h-[calc(100vh-150px)] overflow-y-auto">
              <div className="space-y-2">
                <Label htmlFor="materia-name" className="text-slate-300 text-sm font-semibold">
                  Nombre de la Materia Prima
                </Label>
                <Input
                  id="materia-name"
                  placeholder="Ej: Papas Russet"
                  value={materiaFormData.name}
                  onChange={(e) => setMateriaFormData({ ...materiaFormData, name: e.target.value })}
                  className="input-modern"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="materia-sku" className="text-slate-300 text-sm font-semibold">
                  SKU
                </Label>
                <Input
                  id="materia-sku"
                  placeholder="Ej: MAT-001"
                  value={materiaFormData.sku}
                  onChange={(e) => setMateriaFormData({ ...materiaFormData, sku: e.target.value })}
                  className="input-modern"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="materia-type" className="text-slate-300 text-sm font-semibold">
                  Variedad
                </Label>
                <Select value={materiaFormData.type} onValueChange={(value) => setMateriaFormData({ ...materiaFormData, type: value })}>
                  <SelectTrigger className="input-modern">
                    <SelectValue placeholder="Selecciona variedad" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800/90 border-slate-700/50">
                    <SelectItem value="CRINKLE_CUT" className="text-white">Corte Ondulado</SelectItem>
                    <SelectItem value="STEAKHOUSE_CUT" className="text-white">Corte Steakhouse</SelectItem>
                    <SelectItem value="NORMAL_CUT" className="text-white">Corte Normal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="materia-stock" className="text-slate-300 text-sm font-semibold">
                  Existencias (KG)
                </Label>
                <Input
                  id="materia-stock"
                  type="number"
                  placeholder="0"
                  min="0"
                  value={materiaFormData.current_stock}
                  onChange={(e) => setMateriaFormData({ ...materiaFormData, current_stock: e.target.value })}
                  className="input-modern"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary h-12"
              >
                {isSubmitting ? "Guardando..." : "Crear Materia Prima"}
              </Button>
            </form>
          </SheetContent>
        </Sheet>

        {/* Agregar Producto Terminado */}
        <Sheet open={isAddProductoOpen} onOpenChange={setIsAddProductoOpen}>
          <SheetTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-700 to-cyan-500 hover:shadow-lg hover:shadow-cyan-400/50 text-white h-auto rounded-lg transition-all duration-300 flex flex-col py-4">
              <Plus className="w-5 h-5 mb-2" strokeWidth={2.5} />
              <span>Agregar Producto</span>
              <span className="text-xs text-cyan-100 font-normal">Papas fritas listas para vender</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 w-full sm:max-w-md shadow-2xl">
            <SheetHeader className="mt-6">
              <SheetTitle className="text-white text-2xl font-bold">Agregar Producto Terminado</SheetTitle>
              <SheetDescription className="text-slate-400 font-medium">
                Crea un nuevo producto listo para vender
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleProductoSubmit} className="space-y-5 mt-8 max-h-[calc(100vh-150px)] overflow-y-auto">
              <div className="space-y-2">
                <Label htmlFor="producto-name" className="text-slate-300 text-sm font-semibold">
                  Nombre del Producto
                </Label>
                <Input
                  id="producto-name"
                  placeholder="Ej: Papas Fritas Premium 500g"
                  value={productoFormData.name}
                  onChange={(e) => setProductoFormData({ ...productoFormData, name: e.target.value })}
                  className="input-modern"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="producto-sku" className="text-slate-300 text-sm font-semibold">
                  SKU
                </Label>
                <Input
                  id="producto-sku"
                  placeholder="Ej: FIN-001"
                  value={productoFormData.sku}
                  onChange={(e) => setProductoFormData({ ...productoFormData, sku: e.target.value })}
                  className="input-modern"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="producto-type" className="text-slate-300 text-sm font-semibold">
                  Tipo de Corte
                </Label>
                <Select value={productoFormData.type} onValueChange={(value) => setProductoFormData({ ...productoFormData, type: value })}>
                  <SelectTrigger className="input-modern">
                    <SelectValue placeholder="Selecciona tipo de corte" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800/90 border-slate-700/50">
                    <SelectItem value="CRINKLE_CUT" className="text-white">Corte Ondulado</SelectItem>
                    <SelectItem value="STEAKHOUSE_CUT" className="text-white">Corte Steakhouse</SelectItem>
                    <SelectItem value="NORMAL_CUT" className="text-white">Corte Normal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="producto-stock" className="text-slate-300 text-sm font-semibold">
                  Existencias
                </Label>
                <Input
                  id="producto-stock"
                  type="number"
                  placeholder="0"
                  min="0"
                  value={productoFormData.current_stock}
                  onChange={(e) => setProductoFormData({ ...productoFormData, current_stock: e.target.value })}
                  className="input-modern"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="producto-location" className="text-slate-300 text-sm font-semibold">
                  Ubicación (Cuarto Frío)
                </Label>
                <Select value={productoFormData.location} onValueChange={(value) => setProductoFormData({ ...productoFormData, location: value })}>
                  <SelectTrigger className="input-modern">
                    <SelectValue placeholder="Selecciona cuarto frío" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800/90 border-slate-700/50">
                    <SelectItem value="CUARTO_FRIO_1" className="text-white">Cuarto Frío 1</SelectItem>
                    <SelectItem value="CUARTO_FRIO_2" className="text-white">Cuarto Frío 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary h-12"
              >
                {isSubmitting ? "Guardando..." : "Crear Producto"}
              </Button>
            </form>
          </SheetContent>
        </Sheet>
      </div>

      {/* Edit Sheet */}
      <Sheet open={isEditSheetOpen} onOpenChange={setIsEditSheetOpen}>
        <SheetContent className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 w-full sm:max-w-md shadow-2xl">
          <SheetHeader className="mt-6">
            <SheetTitle className="text-white text-2xl font-bold">Editar Producto</SheetTitle>
            <SheetDescription className="text-slate-400 font-medium">
              Actualiza los detalles del producto
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={handleEditSubmit} className="space-y-5 mt-8 max-h-[calc(100vh-150px)] overflow-y-auto">
            <div className="space-y-2">
              <Label htmlFor="edit-name" className="text-slate-300 text-sm font-semibold">
                Nombre del Producto
              </Label>
              <Input
                id="edit-name"
                placeholder="Ej: Papas Fritas"
                value={editFormData.name}
                onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                className="input-modern"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-sku" className="text-slate-300 text-sm font-semibold">
                SKU
              </Label>
              <Input
                id="edit-sku"
                placeholder="Ej: POT-001"
                value={editFormData.sku}
                onChange={(e) => setEditFormData({ ...editFormData, sku: e.target.value })}
                className="input-modern"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-category" className="text-slate-300 text-sm font-semibold">
                Categoría
              </Label>
              <Select value={editFormData.category} onValueChange={(value) => setEditFormData({ ...editFormData, category: value, location: value === "PACKAGING" ? "ALMACEN_GENERAL" : editFormData.location })}>
                <SelectTrigger className="input-modern">
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800/90 border-slate-700/50">
                  <SelectItem value="PACKAGING" className="text-white">Insumos</SelectItem>
                  <SelectItem value="RAW_MATERIAL" className="text-white">Materia Prima</SelectItem>
                  <SelectItem value="FINISHED_GOOD" className="text-white">Producto Terminado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Type of Cut - Only for RAW_MATERIAL and FINISHED_GOOD */}
            {(editFormData.category === "RAW_MATERIAL" || editFormData.category === "FINISHED_GOOD") && (
              <div className="space-y-2">
                <Label htmlFor="edit-type" className="text-slate-300 text-sm font-semibold">
                  {editFormData.category === "RAW_MATERIAL" ? "Variedad" : "Tipo de Corte"}
                </Label>
                <Select value={editFormData.type} onValueChange={(value) => setEditFormData({ ...editFormData, type: value })}>
                  <SelectTrigger className="input-modern">
                    <SelectValue placeholder={editFormData.category === "RAW_MATERIAL" ? "Selecciona variedad" : "Selecciona tipo de corte"} />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800/90 border-slate-700/50">
                    <SelectItem value="CRINKLE_CUT" className="text-white">Corte Ondulado</SelectItem>
                    <SelectItem value="STEAKHOUSE_CUT" className="text-white">Corte Steakhouse</SelectItem>
                    <SelectItem value="NORMAL_CUT" className="text-white">Corte Normal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Location - Only for FINISHED_GOOD */}
            {editFormData.category === "FINISHED_GOOD" && (
              <div className="space-y-2">
                <Label htmlFor="edit-location" className="text-slate-300 text-sm font-semibold">
                  Ubicación (Cuarto Frío)
                </Label>
                <Select value={editFormData.location} onValueChange={(value) => setEditFormData({ ...editFormData, location: value })}>
                  <SelectTrigger className="input-modern">
                    <SelectValue placeholder="Selecciona cuarto frío" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800/90 border-slate-700/50">
                    <SelectItem value="CUARTO_FRIO_1" className="text-white">Cuarto Frío 1</SelectItem>
                    <SelectItem value="CUARTO_FRIO_2" className="text-white">Cuarto Frío 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="edit-stock" className="text-slate-300 text-sm font-semibold">
                Existencias {editFormData.category === "RAW_MATERIAL" ? "(KG)" : "(kg)"}
              </Label>
              <Input
                id="edit-stock"
                type="number"
                placeholder="0"
                min="0"
                value={editFormData.current_stock}
                onChange={(e) => setEditFormData({ ...editFormData, current_stock: e.target.value })}
                className="input-modern"
              />
            </div>

            {/* Unit Cost - Only for PACKAGING */}
            {editFormData.category === "PACKAGING" && (
              <div className="space-y-2">
                <Label htmlFor="edit-unitCost" className="text-slate-300 text-sm font-semibold">
                  Costo Unitario
                </Label>
                <Input
                  id="edit-unitCost"
                  type="number"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  value={editFormData.unit_cost}
                  onChange={(e) => setEditFormData({ ...editFormData, unit_cost: e.target.value })}
                  className="input-modern"
                />
              </div>
            )}

            {/* Provider - Only for PACKAGING */}
            {editFormData.category === "PACKAGING" && (
              <div className="space-y-2">
                <Label htmlFor="edit-provider" className="text-slate-300 text-sm font-semibold">
                  Proveedor
                </Label>
                <Input
                  id="edit-provider"
                  placeholder="Ej: Proveedor A"
                  value={editFormData.provider}
                  onChange={(e) => setEditFormData({ ...editFormData, provider: e.target.value })}
                  className="input-modern"
                />
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary h-12"
            >
              {isSubmitting ? "Guardando..." : "Actualizar Producto"}
            </Button>
          </form>
        </SheetContent>
      </Sheet>

      {/* Delete Alert */}
      <AlertDialog open={isDeleteAlertOpen} onOpenChange={setIsDeleteAlertOpen}>
        <AlertDialogContent className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 shadow-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white text-xl font-bold">¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-400 font-medium">
              Esta acción es irreversible. Se eliminará permanentemente el producto de la base de datos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end gap-3 pt-4">
            <AlertDialogCancel className="glass-card text-slate-300 border-slate-700/50 hover:bg-slate-800/50 font-medium">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-red-600 to-red-500 text-white hover:shadow-lg hover:shadow-red-500/30 font-medium disabled:opacity-50 transition-all duration-300"
            >
              {isSubmitting ? "Eliminando..." : "Eliminar"}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      {/* Tabs Section */}
      <div className="glass-card-premium w-full">
        {/* Tab Navigation */}
        <div className="p-4 sm:p-6 lg:p-8 border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-2 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-blue-500/10 border border-blue-500/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-3">
            {TABS.find((t) => t.id === activeTab)?.description}
          </p>
        </div>

        {/* Content Area */}
        {isLoading ? (
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-14 w-full bg-slate-800/50 rounded-lg" />
              ))}
            </div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center">
            <div className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 glass-card rounded-2xl flex items-center justify-center mb-6">
              <Package className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-slate-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Sin Productos</h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-400 text-center mb-8 max-w-md font-medium">
              No hay productos en esta categoría. Crea uno nuevo para comenzar.
            </p>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto w-full">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-transparent">
                    <TableHead className="text-slate-300 text-xs lg:text-sm font-semibold">Nombre</TableHead>
                    {activeTab === "PACKAGING" && (
                      <>
                        <TableHead className="text-slate-300 text-xs lg:text-sm font-semibold">Proveedor</TableHead>
                        <TableHead className="text-right text-slate-300 text-xs lg:text-sm font-semibold">Costo Unitario</TableHead>
                      </>
                    )}
                    {activeTab === "RAW_MATERIAL" && (
                      <>
                        <TableHead className="text-slate-300 text-xs lg:text-sm font-semibold">Tipo de Corte</TableHead>
                        <TableHead className="text-right text-slate-300 text-xs lg:text-sm font-semibold">Stock (kg)</TableHead>
                      </>
                    )}
                    {activeTab === "FINISHED_GOOD" && (
                      <>
                        <TableHead className="text-slate-300 text-xs lg:text-sm font-semibold">SKU</TableHead>
                        <TableHead className="text-slate-300 text-xs lg:text-sm font-semibold">Cuarto Frío</TableHead>
                      </>
                    )}
                    <TableHead className="text-slate-300 text-xs lg:text-sm font-semibold">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id} className="border-white/5 hover:bg-blue-500/5 transition-colors duration-200 table-row-hover">
                      <TableCell className="text-white font-medium text-xs lg:text-sm">{product.name}</TableCell>
                      {activeTab === "PACKAGING" && (
                        <>
                          <TableCell className="text-slate-300 text-xs lg:text-sm">{product.provider || "-"}</TableCell>
                          <TableCell className="text-right text-blue-400 font-semibold text-xs lg:text-sm">
                            ${product.unit_cost?.toFixed(2) || "0.00"}
                          </TableCell>
                        </>
                      )}
                      {activeTab === "RAW_MATERIAL" && (
                        <>
                          <TableCell className="text-xs lg:text-sm">
                            <Badge variant="outline" className={`${getFriesTypeColor(product.type)} border text-xs font-medium`}>
                              {getFriesTypeLabel(product.type)}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right text-blue-400 font-bold text-xs lg:text-sm">
                            {product.current_stock} kg
                          </TableCell>
                        </>
                      )}
                      {activeTab === "FINISHED_GOOD" && (
                        <>
                          <TableCell className="font-mono text-slate-300 text-xs lg:text-sm">{product.sku}</TableCell>
                          <TableCell className="text-xs lg:text-sm">
                            <Badge variant="outline" className={`${getLocationColor(product.location)} border text-xs font-medium`}>
                              {getLocationLabel(product.location)}
                            </Badge>
                          </TableCell>
                        </>
                      )}
                      <TableCell className="text-xs lg:text-sm">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditSheet(product)}
                            className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200 min-h-[40px] min-w-[40px] flex items-center justify-center"
                            title="Editar producto"
                          >
                            <Pencil className="w-4 h-4" strokeWidth={2.5} />
                          </button>
                          <button
                            onClick={() => openDeleteAlert(product)}
                            className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200 min-h-[40px] min-w-[40px] flex items-center justify-center"
                            title="Eliminar producto"
                          >
                            <Trash className="w-4 h-4" strokeWidth={2.5} />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden p-3 sm:p-4 lg:p-6 space-y-4 w-full">
              {filteredProducts.map((product) => (
                <div key={product.id} className="glass-card p-4 sm:p-5 space-y-4 w-full">
                  <div className="flex justify-between items-start gap-2 w-full">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-base sm:text-lg truncate">{product.name}</h3>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => openEditSheet(product)}
                        className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                        title="Editar producto"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => openDeleteAlert(product)}
                        className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                        title="Eliminar producto"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {activeTab === "PACKAGING" && (
                      <>
                        <div>
                          <p className="text-zinc-400">Proveedor</p>
                          <p className="text-white font-semibold mt-1">{product.provider || "-"}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-zinc-400">Costo</p>
                          <p className="text-blue-400 font-bold mt-1">${product.unit_cost?.toFixed(2) || "0.00"}</p>
                        </div>
                      </>
                    )}
                    {activeTab === "RAW_MATERIAL" && (
                      <>
                        <div>
                          <p className="text-zinc-400">Tipo</p>
                          <Badge variant="outline" className={`${getFriesTypeColor(product.type)} border text-xs mt-1`}>
                            {getFriesTypeLabel(product.type)}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-zinc-400">Stock</p>
                          <p className="text-blue-400 font-bold mt-1">{product.current_stock} kg</p>
                        </div>
                      </>
                    )}
                    {activeTab === "FINISHED_GOOD" && (
                      <>
                        <div>
                          <p className="text-zinc-400">SKU</p>
                          <p className="text-white font-mono text-sm mt-1">{product.sku}</p>
                        </div>
                        <div>
                          <p className="text-zinc-400">Cuarto Frío</p>
                          <Badge variant="outline" className={`${getLocationColor(product.location)} border text-xs mt-1`}>
                            {getLocationLabel(product.location)}
                          </Badge>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Analytics Section */}
      <AnalyticsCharts />
    </div>
  )
}
