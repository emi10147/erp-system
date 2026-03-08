"use client"

import { useEffect, useState } from "react"
import { Plus, Package, Pencil, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
}

export default function InventoryPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isEditSheetOpen, setIsEditSheetOpen] = useState(false)
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<Product | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    category: "",
    type: "NORMAL_CUT",
    location: "",
    current_stock: "",
  })
  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    sku: "",
    category: "",
    type: "NORMAL_CUT",
    location: "",
    current_stock: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.sku || !formData.category || !formData.current_stock) {
      alert("Por favor, completa todos los campos")
      return
    }

    try {
      setIsSubmitting(true)
      const result = await createProduct({
        name: formData.name,
        sku: formData.sku,
        category: formData.category as "RAW_MATERIAL" | "FINISHED_GOOD" | "PACKAGING",
        type: formData.type as "CRINKLE_CUT" | "STEAKHOUSE_CUT" | "NORMAL_CUT",
        location: formData.location as "CUARTO_FRIO_1" | "CUARTO_FRIO_2" | "ALMACEN_GENERAL" || undefined,
        current_stock: parseInt(formData.current_stock),
      })

      if (result.success) {
        setFormData({ name: "", sku: "", category: "", type: "NORMAL_CUT", location: "", current_stock: "" })
        setIsSheetOpen(false)
        fetchProducts()
        alert(result.message)
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al crear el producto")
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
    })
    setIsEditSheetOpen(true)
  }

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editFormData.name || !editFormData.sku || !editFormData.category || !editFormData.current_stock) {
      alert("Por favor, completa todos los campos")
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
      })

      if (result.success) {
        setEditFormData({ id: "", name: "", sku: "", category: "", type: "NORMAL_CUT", location: "", current_stock: "" })
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "RAW_MATERIAL":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "FINISHED_GOOD":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
      case "PACKAGING":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30"
      default:
        return "bg-zinc-500/20 text-zinc-400 border-zinc-500/30"
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "RAW_MATERIAL":
        return "Materia Prima"
      case "FINISHED_GOOD":
        return "Producto Terminado"
      case "PACKAGING":
        return "Empaque"
      default:
        return category
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
    <div className="w-full min-h-screen p-3 sm:p-4 lg:p-8">
      {/* Header - Responsive padding */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4 sm:mb-6 lg:mb-8 gap-4">
        <div className="w-full">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-1 lg:mb-2 flex items-center gap-2">
            <Package className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-emerald-400" />
            Gestión de Inventario
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-zinc-400">Administra todos los productos y niveles de existencias</p>
        </div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full lg:w-auto min-h-[44px]">
              <Plus className="w-4 h-4 mr-2" />
              Agregar Producto
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-zinc-900 border-zinc-800 w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle className="text-white">Agregar Nuevo Producto</SheetTitle>
              <SheetDescription className="text-zinc-400">
                Crea un nuevo producto en tu inventario
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-6 max-h-[calc(100vh-150px)] overflow-y-auto">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-300 text-sm">
                  Nombre del Producto
                </Label>
                <Input
                  id="name"
                  placeholder="Ej: Papas Fritas"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 min-h-[44px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sku" className="text-zinc-300 text-sm">
                  SKU
                </Label>
                <Input
                  id="sku"
                  placeholder="Ej: POT-001"
                  value={formData.sku}
                  onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 min-h-[44px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-zinc-300 text-sm">
                  Categoría
                </Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white min-h-[44px]">
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="RAW_MATERIAL" className="text-white">Materia Prima</SelectItem>
                    <SelectItem value="FINISHED_GOOD" className="text-white">Producto Terminado</SelectItem>
                    <SelectItem value="PACKAGING" className="text-white">Empaque</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type" className="text-zinc-300 text-sm">
                  Tipo de Corte
                </Label>
                <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white min-h-[44px]">
                    <SelectValue placeholder="Selecciona un tipo de corte" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="CRINKLE_CUT" className="text-white">Corte Ondulado</SelectItem>
                    <SelectItem value="STEAKHOUSE_CUT" className="text-white">Corte Steakhouse</SelectItem>
                    <SelectItem value="NORMAL_CUT" className="text-white">Corte Normal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-zinc-300 text-sm">
                  Ubicación
                </Label>
                <Select value={formData.location} onValueChange={(value) => setFormData({ ...formData, location: value })}>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white min-h-[44px]">
                    <SelectValue placeholder="Selecciona una ubicación" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="CUARTO_FRIO_1" className="text-white">Cuarto Frío 1</SelectItem>
                    <SelectItem value="CUARTO_FRIO_2" className="text-white">Cuarto Frío 2</SelectItem>
                    <SelectItem value="ALMACEN_GENERAL" className="text-white">Almacén General</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="stock" className="text-zinc-300 text-sm">
                  Existencias Iniciales (kg)
                </Label>
                <Input
                  id="stock"
                  type="number"
                  placeholder="0"
                  min="0"
                  value={formData.current_stock}
                  onChange={(e) => setFormData({ ...formData, current_stock: e.target.value })}
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 min-h-[44px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white min-h-[44px]"
              >
                {isSubmitting ? "Guardando..." : "Crear Producto"}
              </Button>
            </form>
          </SheetContent>
        </Sheet>
      </div>

      {/* Edit Product Sheet */}
      <Sheet open={isEditSheetOpen} onOpenChange={setIsEditSheetOpen}>
        <SheetContent className="bg-zinc-900 border-zinc-800 w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="text-white">Editar Producto</SheetTitle>
            <SheetDescription className="text-zinc-400">
              Actualiza los detalles del producto
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={handleEditSubmit} className="space-y-4 mt-6 max-h-[calc(100vh-150px)] overflow-y-auto">
            <div className="space-y-2">
              <Label htmlFor="edit-name" className="text-zinc-300 text-sm">
                Nombre del Producto
              </Label>
              <Input
                id="edit-name"
                placeholder="Ej: Papas Fritas"
                value={editFormData.name}
                onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 min-h-[44px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-sku" className="text-zinc-300 text-sm">
                SKU
              </Label>
              <Input
                id="edit-sku"
                placeholder="Ej: POT-001"
                value={editFormData.sku}
                onChange={(e) => setEditFormData({ ...editFormData, sku: e.target.value })}
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 min-h-[44px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-category" className="text-zinc-300 text-sm">
                Categoría
              </Label>
              <Select value={editFormData.category} onValueChange={(value) => setEditFormData({ ...editFormData, category: value })}>
                <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white min-h-[44px]">
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700">
                  <SelectItem value="RAW_MATERIAL" className="text-white">Materia Prima</SelectItem>
                  <SelectItem value="FINISHED_GOOD" className="text-white">Producto Terminado</SelectItem>
                  <SelectItem value="PACKAGING" className="text-white">Empaque</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-type" className="text-zinc-300 text-sm">
                Tipo de Corte
              </Label>
              <Select value={editFormData.type} onValueChange={(value) => setEditFormData({ ...editFormData, type: value })}>
                <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white min-h-[44px]">
                  <SelectValue placeholder="Selecciona un tipo de corte" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700">
                  <SelectItem value="CRINKLE_CUT" className="text-white">Corte Ondulado</SelectItem>
                  <SelectItem value="STEAKHOUSE_CUT" className="text-white">Corte Steakhouse</SelectItem>
                  <SelectItem value="NORMAL_CUT" className="text-white">Corte Normal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-location" className="text-zinc-300 text-sm">
                Ubicación
              </Label>
              <Select value={editFormData.location} onValueChange={(value) => setEditFormData({ ...editFormData, location: value })}>
                <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white min-h-[44px]">
                  <SelectValue placeholder="Selecciona una ubicación" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700">
                  <SelectItem value="CUARTO_FRIO_1" className="text-white">Cuarto Frío 1</SelectItem>
                  <SelectItem value="CUARTO_FRIO_2" className="text-white">Cuarto Frío 2</SelectItem>
                  <SelectItem value="ALMACEN_GENERAL" className="text-white">Almacén General</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-stock" className="text-zinc-300 text-sm">
                Existencias (kg)
              </Label>
              <Input
                id="edit-stock"
                type="number"
                placeholder="0"
                min="0"
                value={editFormData.current_stock}
                onChange={(e) => setEditFormData({ ...editFormData, current_stock: e.target.value })}
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 min-h-[44px]"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white min-h-[44px]"
            >
              {isSubmitting ? "Guardando..." : "Actualizar Producto"}
            </Button>
          </form>
        </SheetContent>
      </Sheet>

      {/* Delete Confirmation Alert */}
      <AlertDialog open={isDeleteAlertOpen} onOpenChange={setIsDeleteAlertOpen}>
        <AlertDialogContent className="bg-zinc-900 border-zinc-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">¿Estás absolutamente seguro?</AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-400">
              Esta acción no se puede deshacer. Esto eliminará permanentemente el producto de la base de datos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end gap-3">
            <AlertDialogCancel className="bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              disabled={isSubmitting}
              className="bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
            >
              {isSubmitting ? "Eliminando..." : "Eliminar"}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      {/* Products Table - Desktop / Card List - Mobile */}
      <div className="glass-card w-full">
        <div className="p-3 sm:p-4 lg:p-6 border-b border-white/10">
          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white">Productos</h2>
        </div>

        {isLoading ? (
          <div className="p-3 sm:p-4 lg:p-6">
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-12 w-full bg-zinc-800" />
              ))}
            </div>
          </div>
        ) : products.length === 0 ? (
          <div className="p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center">
            <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 glass-card rounded-full flex items-center justify-center mb-4">
              <Package className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-zinc-500" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2">Sin Productos</h3>
            <p className="text-xs sm:text-sm lg:text-base text-zinc-400 text-center mb-6 max-w-md">
              Tu inventario está vacío. Agrega tu primer producto para comenzar.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white min-h-[44px]">
              <Plus className="w-4 h-4 mr-2" />
              Agregar Primer Producto
            </Button>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto w-full">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-transparent">
                    <TableHead className="text-zinc-300 text-xs lg:text-sm">Nombre</TableHead>
                    <TableHead className="text-zinc-300 text-xs lg:text-sm">SKU</TableHead>
                    <TableHead className="text-zinc-300 text-xs lg:text-sm">Categoría</TableHead>
                    <TableHead className="text-zinc-300 text-xs lg:text-sm">Tipo de Corte</TableHead>
                    <TableHead className="text-zinc-300 text-xs lg:text-sm">Ubicación</TableHead>
                    <TableHead className="text-zinc-300 text-right text-xs lg:text-sm">Existencias (kg)</TableHead>
                    <TableHead className="text-zinc-300 text-xs lg:text-sm">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id} className="border-white/5 hover:bg-white/5">
                      <TableCell className="text-white font-medium text-xs lg:text-sm">{product.name}</TableCell>
                      <TableCell className="font-mono text-zinc-300 text-xs lg:text-sm">{product.sku}</TableCell>
                      <TableCell className="text-xs lg:text-sm">
                        <Badge variant="outline" className={`${getCategoryColor(product.category)} border text-xs`}>
                          {getCategoryLabel(product.category)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs lg:text-sm">
                        <Badge variant="outline" className={`${getFriesTypeColor(product.type)} border text-xs`}>
                          {getFriesTypeLabel(product.type)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs lg:text-sm">
                        <Badge variant="outline" className={`${getLocationColor(product.location)} border text-xs`}>
                          {getLocationLabel(product.location)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right text-emerald-400 font-semibold text-xs lg:text-sm">
                        {product.current_stock}
                      </TableCell>
                      <TableCell className="text-xs lg:text-sm">
                        <div className="flex gap-2">
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
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden p-3 sm:p-4 space-y-3 w-full">
              {products.map((product) => (
                <div key={product.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 sm:p-4 space-y-3 w-full">
                  <div className="flex justify-between items-start gap-2 w-full">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm sm:text-base truncate">{product.name}</h3>
                      <p className="text-xs text-zinc-400 font-mono">{product.sku}</p>
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
                    <div>
                      <p className="text-zinc-400">Categoría</p>
                      <Badge variant="outline" className={`${getCategoryColor(product.category)} border text-xs mt-1`}>
                        {getCategoryLabel(product.category)}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-zinc-400">Tipo de Corte</p>
                      <Badge variant="outline" className={`${getFriesTypeColor(product.type)} border text-xs mt-1`}>
                        {getFriesTypeLabel(product.type)}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-zinc-400">Ubicación</p>
                      <Badge variant="outline" className={`${getLocationColor(product.location)} border text-xs mt-1`}>
                        {getLocationLabel(product.location)}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-400">Existencias</p>
                      <p className="text-lg font-bold text-emerald-400 mt-1">{product.current_stock} kg</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
