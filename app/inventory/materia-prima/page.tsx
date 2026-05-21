"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Plus, Package, Pencil, Trash, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnalyticsCharts } from "@/components/analytics-charts"
import { CostAnalyticsCharts } from "@/components/cost-analytics-charts"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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

export default function MateriaPrimaPage() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [isEditSheetOpen, setIsEditSheetOpen] = useState(false)
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<Product | null>(null)
  const [analyticRefreshTrigger, setAnalyticRefreshTrigger] = useState(0)
  const [skuSelectionOpen, setSkuSelectionOpen] = useState(false)
  const [skuOptions, setSkuOptions] = useState<Array<{ id: string; sku: string; stock: number }>>([])
  const [selectedSkuId, setSelectedSkuId] = useState<string | null>(null)
  
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    category: "RAW_MATERIAL" as const,
    type: "NORMAL_CUT",
    location: "",
    current_stock: "",
    unit_cost: "",
    provider: "",
    ingresoDate: new Date().toISOString().split("T")[0],
  })

  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    sku: "",
    category: "RAW_MATERIAL" as const,
    type: "NORMAL_CUT",
    location: "",
    current_stock: "",
    unit_cost: "",
    provider: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedProductName, setSelectedProductName] = useState<string | null>(null)

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

  const filteredProducts = products.filter((p) => p.category === "RAW_MATERIAL")

  // Consolidate products by name (collapse rows)
  const consolidatedProducts = Array.from(
    filteredProducts.reduce((map, product) => {
      if (!map.has(product.name)) {
        map.set(product.name, {
          name: product.name,
          totalStock: 0,
          skus: [],
          category: product.category,
        })
      }
      const consolidated = map.get(product.name)!
      consolidated.totalStock += product.current_stock
      consolidated.skus.push({
        id: product.id,
        sku: product.sku,
        stock: product.current_stock,
        fullProduct: product,
      })
      return map
    }, new Map<string, any>())
  ).map(([_, value]) => value)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validMateriaNames = ["Papa Agria", "Papa Chola", "Papa Superchola"]
    if (!formData.name || !validMateriaNames.includes(formData.name)) {
      alert("Por favor, selecciona una materia prima válida del dropdown")
      return
    }
    if (!formData.sku || !formData.current_stock) {
      alert("Por favor, completa todos los campos requeridos")
      return
    }

    try {
      setIsSubmitting(true)
      const result = await createProduct({
        name: formData.name,
        sku: formData.sku,
        category: "RAW_MATERIAL",
        type: formData.type as "CRINKLE_CUT" | "STEAKHOUSE_CUT" | "NORMAL_CUT",
        location: undefined,
        current_stock: parseInt(formData.current_stock),
        unit_cost: undefined,
        provider: undefined,
        ingresoDate: new Date(formData.ingresoDate),
      })

      if (result.success) {
        setFormData({ name: "", sku: "", category: "RAW_MATERIAL", type: "NORMAL_CUT", location: "", current_stock: "", unit_cost: "", provider: "", ingresoDate: new Date().toISOString().split("T")[0] })
        setIsAddOpen(false)
        fetchProducts()
        setAnalyticRefreshTrigger((prev) => prev + 1)
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

  const openEditSheet = (product: Product) => {
    setEditFormData({
      id: product.id,
      name: product.name,
      sku: product.sku,
      category: product.category as "RAW_MATERIAL",
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
    if (!editFormData.name || !editFormData.sku || !editFormData.current_stock) {
      alert("Por favor, completa todos los campos requeridos")
      return
    }

    try {
      setIsSubmitting(true)
      const result = await updateProduct({
        id: editFormData.id,
        name: editFormData.name,
        sku: editFormData.sku,
        category: "RAW_MATERIAL",
        type: editFormData.type as "CRINKLE_CUT" | "STEAKHOUSE_CUT" | "NORMAL_CUT",
        location: undefined,
        current_stock: parseInt(editFormData.current_stock),
        unit_cost: undefined,
        provider: undefined,
      })

      if (result.success) {
        setEditFormData({ id: "", name: "", sku: "", category: "RAW_MATERIAL", type: "NORMAL_CUT", location: "", current_stock: "", unit_cost: "", provider: "" })
        setIsEditSheetOpen(false)
        fetchProducts()
        setAnalyticRefreshTrigger((prev) => prev + 1)
        alert(result.message)
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al actualizar la materia prima")
    } finally {
      setIsSubmitting(false)
    }
  }

  const openDeleteAlert = (product: Product) => {
    setProductToDelete(product)
    setIsDeleteAlertOpen(true)
  }

  const openSkuSelection = (consolidated: any) => {
    // Si hay múltiples SKUs, mostrar selector
    if (consolidated.skus.length > 1) {
      setSkuOptions(consolidated.skus)
      setSkuSelectionOpen(true)
      setSelectedSkuId(consolidated.skus[0].id)
    } else {
      // Si hay uno solo, eliminar directamente
      openDeleteAlert(consolidated.skus[0].fullProduct)
    }
  }

  const handleSkuSelected = () => {
    if (selectedSkuId) {
      const selected = skuOptions.find((s) => s.id === selectedSkuId)
      if (selected) {
        // Encontrar el producto completo
        const fullProduct = filteredProducts.find((p) => p.id === selectedSkuId)
        if (fullProduct) {
          openDeleteAlert(fullProduct)
          setSkuSelectionOpen(false)
        }
      }
    }
  }

  const originalOpenDeleteAlert = openDeleteAlert
  const openDeleteAlertWrapper = (product: Product) => {
    originalOpenDeleteAlert(product)
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
        setAnalyticRefreshTrigger((prev) => prev + 1)
        alert(result.message)
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al eliminar la materia prima")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full min-h-screen p-4 sm:p-6 lg:p-8 bg-black">
      <button
        onClick={() => router.push("/")}
        className="mb-6 flex items-center gap-2 text-blue-400 hover:text-cyan-300 transition-colors duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
        <span className="font-semibold text-sm">Volver al Panel</span>
      </button>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 lg:mb-10 gap-6">
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 lg:mb-3 flex items-center gap-3 tracking-tight">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Package className="w-7 sm:w-8 lg:w-9 h-7 sm:h-8 lg:h-9 text-blue-400" strokeWidth={2.5} />
            </div>
            Materia Prima
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-cyan-300/70 font-medium">Papas crudas y materiales</p>
        </div>
      </div>

      <div className="mb-8">
        <Sheet open={isAddOpen} onOpenChange={setIsAddOpen}>
          <SheetTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-700 to-cyan-500 hover:shadow-lg hover:shadow-cyan-400/50 text-white h-auto rounded-lg transition-all duration-300 w-full flex flex-col py-4">
              <Plus className="w-5 h-5 mb-2" strokeWidth={2.5} />
              <span>Agregar Materia Prima</span>
              <span className="text-xs text-cyan-100 font-normal">Papas y materiales</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-gradient-to-b from-black to-black/80 border-cyan-500/30 w-full sm:max-w-md shadow-2xl">
            <SheetHeader className="mt-6">
              <SheetTitle className="text-white text-2xl font-bold">Agregar Materia Prima</SheetTitle>
              <SheetDescription className="text-cyan-300/70 font-medium">
                Crea un nuevo lote de materia prima
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleSubmit} className="space-y-5 mt-8 max-h-[calc(100vh-150px)] overflow-y-auto">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-cyan-300 text-sm font-semibold">
                  Nombre de la Materia Prima
                </Label>
                <Select value={formData.name} onValueChange={(value) => setFormData({ ...formData, name: value })}>
                  <SelectTrigger className="input-modern">
                    <SelectValue placeholder="Selecciona una variedad" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/90 border-cyan-500/30">
                    <SelectItem value="Papa Agria" className="text-white">Papa Agria</SelectItem>
                    <SelectItem value="Papa Chola" className="text-white">Papa Chola</SelectItem>
                    <SelectItem value="Papa Superchola" className="text-white">Papa Superchola</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sku" className="text-cyan-300 text-sm font-semibold">
                  SKU
                </Label>
                <Input
                  id="sku"
                  placeholder="Ej: MAT-001"
                  value={formData.sku}
                  onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                  className="input-modern"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stock" className="text-cyan-300 text-sm font-semibold">
                  Existencias (KG)
                </Label>
                <Input
                  id="stock"
                  type="number"
                  placeholder="0"
                  min="0"
                  value={formData.current_stock}
                  onChange={(e) => setFormData({ ...formData, current_stock: e.target.value })}
                  className="input-modern"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fecha" className="text-cyan-300 text-sm font-semibold">
                  Fecha de Ingreso
                </Label>
                <Input
                  id="fecha"
                  type="date"
                  value={formData.ingresoDate}
                  onChange={(e) => setFormData({ ...formData, ingresoDate: e.target.value })}
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
      </div>

      <Sheet open={isEditSheetOpen} onOpenChange={setIsEditSheetOpen}>
        <SheetContent className="bg-gradient-to-b from-black to-black/80 border-cyan-500/30 w-full sm:max-w-md shadow-2xl">
          <SheetHeader className="mt-6">
            <SheetTitle className="text-white text-2xl font-bold">Editar Materia Prima</SheetTitle>
            <SheetDescription className="text-cyan-300/70 font-medium">
              Actualiza los detalles de la materia prima
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={handleEditSubmit} className="space-y-5 mt-8 max-h-[calc(100vh-150px)] overflow-y-auto">
            <div className="space-y-2">
              <Label htmlFor="edit-name" className="text-cyan-300 text-sm font-semibold">
                Nombre de la Materia Prima
              </Label>
              <Input
                id="edit-name"
                placeholder="Ej: Papa Agria"
                value={editFormData.name}
                onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                className="input-modern"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-sku" className="text-cyan-300 text-sm font-semibold">
                SKU
              </Label>
              <Input
                id="edit-sku"
                placeholder="Ej: MAT-001"
                value={editFormData.sku}
                onChange={(e) => setEditFormData({ ...editFormData, sku: e.target.value })}
                className="input-modern"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-stock" className="text-cyan-300 text-sm font-semibold">
                Existencias (KG)
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

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary h-12"
            >
              {isSubmitting ? "Guardando..." : "Actualizar Materia Prima"}
            </Button>
          </form>
        </SheetContent>
      </Sheet>

      <AlertDialog open={isDeleteAlertOpen} onOpenChange={setIsDeleteAlertOpen}>
        <AlertDialogContent className="bg-gradient-to-b from-black to-black/80 border-cyan-500/30 shadow-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white text-xl font-bold">¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription className="text-cyan-300/70 font-medium">
              Esta acción es irreversible. Se eliminará permanentemente la materia prima de la base de datos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end gap-3 pt-4">
            <AlertDialogCancel className="glass-card text-cyan-300 border-cyan-500/20/50 hover:bg-slate-800/50 font-medium">
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

      <Dialog open={skuSelectionOpen} onOpenChange={setSkuSelectionOpen}>
        <DialogContent className="bg-gradient-to-b from-black to-black/80 border-cyan-500/30 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-white text-xl font-bold">Seleccionar SKU para eliminar</DialogTitle>
            <DialogDescription className="text-cyan-300/70 font-medium mt-2">
              Este producto tiene múltiples variantes. Selecciona cuál deseas eliminar.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 max-h-[300px] overflow-y-auto py-4">
            {skuOptions.map((sku) => (
              <button
                key={sku.id}
                onClick={() => setSelectedSkuId(sku.id)}
                className={`w-full p-3 rounded-lg border-2 transition-all text-left ${selectedSkuId === sku.id ? 'border-cyan-500 bg-cyan-500/20' : 'border-slate-600 hover:border-cyan-500/50 bg-slate-900/50'}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-cyan-300 font-semibold">{sku.sku}</p>
                    <p className="text-cyan-300/60 text-sm mt-1">{sku.stock} kg</p>
                  </div>
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${selectedSkuId === sku.id ? 'border-cyan-500 bg-cyan-500' : 'border-slate-500'}`}>
                    {selectedSkuId === sku.id && <div className="w-2 h-2 bg-black rounded-full"></div>}
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={() => setSkuSelectionOpen(false)}
              className="px-4 py-2 rounded-lg glass-card text-cyan-300 border border-cyan-500/20 hover:bg-slate-800/50 font-medium transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSkuSelected}
              disabled={!selectedSkuId}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white hover:shadow-lg hover:shadow-red-500/30 font-medium disabled:opacity-50 transition-all duration-300"
            >
              Confirmar eliminar
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="glass-card-premium w-full">
        {isLoading ? (
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-14 w-full bg-slate-800/50 rounded-lg" />
              ))}
            </div>
          </div>
        ) : consolidatedProducts.length === 0 ? (
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center">
            <div className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 glass-card rounded-2xl flex items-center justify-center mb-6">
              <Package className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-cyan-300/50" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Sin Materia Prima</h3>
            <p className="text-sm sm:text-base lg:text-lg text-cyan-300/70 text-center mb-8 max-w-md font-medium">
              No hay materia prima registrada. Crea una nueva para comenzar.
            </p>
          </div>
        ) : (
          <>
            <div className="hidden md:block overflow-x-auto w-full">
              <Table>
                <TableHeader>
                  <TableRow className="border-cyan-500/20 hover:bg-transparent">
                    <TableHead className="text-cyan-300 text-xs lg:text-sm font-semibold">Nombre</TableHead>
                    <TableHead className="text-right text-cyan-300 text-xs lg:text-sm font-semibold">Stock Total (kg)</TableHead>
                    <TableHead className="text-cyan-300 text-xs lg:text-sm font-semibold">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {consolidatedProducts.map((consolidated) => (
                    <TableRow key={consolidated.name} className="border-cyan-500/10 hover:bg-cyan-500/5 transition-colors duration-200 table-row-hover">
                      <TableCell className="text-white font-medium text-xs lg:text-sm">{consolidated.name}</TableCell>
                      <TableCell className="text-right text-blue-400 font-bold text-xs lg:text-sm">
                        {consolidated.totalStock} kg
                      </TableCell>
                      <TableCell className="text-xs lg:text-sm">
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSelectedProductName(consolidated.name)
                              if (consolidated.skus.length === 1) {
                                openEditSheet(consolidated.skus[0].fullProduct)
                              }
                            }}
                            className="p-2 text-cyan-300/70 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200 min-h-[40px] min-w-[40px] flex items-center justify-center"
                            title="Editar materia prima"
                          >
                            <Pencil className="w-4 h-4" strokeWidth={2.5} />
                          </button>
                          <button
                            onClick={() => openSkuSelection(consolidated)}
                            className="p-2 text-cyan-300/70 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200 min-h-[40px] min-w-[40px] flex items-center justify-center"
                            title="Eliminar materia prima"
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

            <div className="md:hidden p-3 sm:p-4 lg:p-6 space-y-4 w-full">
              {consolidatedProducts.map((consolidated) => (
                <div key={consolidated.name} className="glass-card p-4 sm:p-5 space-y-4 w-full">
                  <div className="flex justify-between items-start gap-2 w-full">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-base sm:text-lg truncate">{consolidated.name}</h3>
                      <p className="text-xs text-cyan-300/60 mt-1">{consolidated.skus.length} {consolidated.skus.length === 1 ? 'SKU' : 'SKUs'}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => {
                          setSelectedProductName(consolidated.name)
                          if (consolidated.skus.length === 1) {
                            openEditSheet(consolidated.skus[0].fullProduct)
                          }
                        }}
                        className="p-2 text-cyan-300/60 hover:text-cyan-300 hover:bg-cyan-500/20 rounded transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                        title="Editar materia prima"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => openSkuSelection(consolidated)}
                        className="p-2 text-cyan-300/60 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                        title="Eliminar materia prima"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-cyan-300/60 text-xs">Stock Total</p>
                    <p className="text-blue-400 font-bold text-base mt-1">{consolidated.totalStock} kg</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <AnalyticsCharts activeCategory="RAW_MATERIAL" refreshTrigger={analyticRefreshTrigger} />

      <CostAnalyticsCharts 
        category="RAW_MATERIAL" 
        refreshTrigger={analyticRefreshTrigger}
      />
    </div>
  )
}
