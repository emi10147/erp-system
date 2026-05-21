"use client"

import { useState, useEffect, useRef } from "react"
import { format, getDaysInMonth, startOfMonth } from "date-fns"
import { ChevronLeft, ChevronRight, Plus, Trash2, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface Employee {
  id: string
  name: string
  position: string
  daily_salary: string
}

interface AttendanceRecord {
  id: string
  employee_id: string
  date: string
  hours_worked: number
  employee: Employee
}

export default function HRPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [employees, setEmployees] = useState<Employee[]>([])
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isAddingEmployee, setIsAddingEmployee] = useState(false)
  const [newEmployee, setNewEmployee] = useState({ name: "", position: "", daily_salary: "" })
  const [editingCell, setEditingCell] = useState<{ empId: string; day: number; value: string } | null>(null)
  const [isEditingSalary, setIsEditingSalary] = useState(false)
  const [selectedEmployeeForSalary, setSelectedEmployeeForSalary] = useState<Employee | null>(null)
  const [newSalary, setNewSalary] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input when editing
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [editingCell])

  // Fetch employees and attendance
  useEffect(() => {
    fetchData()
  }, [currentDate])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      // Fetch employees
      const empRes = await fetch("/api/employees")
      if (empRes.ok) {
        const empData = await empRes.json()
        setEmployees(empData)
      }

      // Fetch attendance for the month
      const year = currentDate.getFullYear()
      const month = currentDate.getMonth() + 1
      const attRes = await fetch(`/api/attendance?year=${year}&month=${month}`)
      if (attRes.ok) {
        const attData = await attRes.json()
        setAttendance(attData)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const addEmployee = async () => {
    if (!newEmployee.name || !newEmployee.position || !newEmployee.daily_salary) return

    try {
      const res = await fetch("/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newEmployee.name,
          position: newEmployee.position,
          daily_salary: parseFloat(newEmployee.daily_salary),
        }),
      })

      if (res.ok) {
        const emp = await res.json()
        setEmployees([...employees, emp])
        setNewEmployee({ name: "", position: "", daily_salary: "" })
        setIsAddingEmployee(false)
      }
    } catch (error) {
      console.error("Error adding employee:", error)
    }
  }

  const deleteEmployee = async (id: string) => {
    try {
      const res = await fetch(`/api/employees/${id}`, { method: "DELETE" })
      if (res.ok) {
        setEmployees(employees.filter((e) => e.id !== id))
      }
    } catch (error) {
      console.error("Error deleting employee:", error)
    }
  }

  const updateEmployeeSalary = async () => {
    if (!selectedEmployeeForSalary || !newSalary) return

    const salaryValue = parseFloat(newSalary)
    if (isNaN(salaryValue) || salaryValue < 0) {
      alert("Por favor ingresa una nómina válida")
      return
    }

    try {
      const res = await fetch(`/api/employees/${selectedEmployeeForSalary.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: selectedEmployeeForSalary.name,
          position: selectedEmployeeForSalary.position,
          daily_salary: salaryValue,
        }),
      })

      if (res.ok) {
        const updatedEmployee = await res.json()
        setEmployees(employees.map((e) => (e.id === updatedEmployee.id ? updatedEmployee : e)))
        setIsEditingSalary(false)
        setSelectedEmployeeForSalary(null)
        setNewSalary("")
      }
    } catch (error) {
      console.error("Error updating salary:", error)
    }
  }

  const updateAttendance = async (employeeId: string, day: number, hoursWorked: number) => {
    // Create date in UTC to avoid timezone issues
    const date = new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), day))
    const dateStr = date.toISOString().split("T")[0]  // "2026-03-10"

    try {
      const res = await fetch("/api/attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employee_id: employeeId,
          date: dateStr,
          hours_worked: hoursWorked,
        }),
      })

      if (res.ok) {
        const updatedRecord = await res.json()
        console.log(`[API SUCCESS] Saved: empId=${employeeId}, date=${dateStr}, hours=${updatedRecord.hours_worked}`)
        
        setAttendance((prev) => {
          const filtered = prev.filter((a) => {
            // Handle both string and Date formats, always compare as ISO strings
            const aDateStr = typeof a.date === 'string'
              ? a.date.split('T')[0]  // "2026-03-10T00:00:00.000Z" → "2026-03-10"
              : new Date(a.date).toISOString().split('T')[0]
            return !(a.employee_id === employeeId && aDateStr === dateStr)
          })
          console.log(`[STATE UPDATE] Filtered ${prev.length} records → ${filtered.length}, Adding updated record`)
          return [...filtered, updatedRecord]
        })
      } else {
        console.error("Error updating attendance:", res.status, res.statusText)
      }
    } catch (error) {
      console.error("Error updating attendance:", error)
    }
  }

  const getHoursForDay = (employeeId: string, day: number): number => {
    // Create date in UTC to avoid timezone issues  
    const date = new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), day))
    const dateStr = date.toISOString().split("T")[0]
    
    const record = attendance.find((a) => {
      // Handle both string and Date formats, always compare as ISO strings
      const aDateStr = typeof a.date === 'string' 
        ? a.date.split('T')[0]  // "2026-03-10T00:00:00.000Z" → "2026-03-10"
        : new Date(a.date).toISOString().split('T')[0]
      return a.employee_id === employeeId && aDateStr === dateStr
    })
    const hours = record?.hours_worked || 0
    return typeof hours === "number" ? hours : parseFloat(String(hours))
  }

  const getTotalHours = (employeeId: string): number => {
    return attendance
      .filter((a) => a.employee_id === employeeId)
      .reduce((sum, a) => {
        const hours = typeof a.hours_worked === "number" ? a.hours_worked : parseFloat(String(a.hours_worked))
        return sum + hours
      }, 0)
  }

  const getHoursDayTotal = (day: number): number => {
    return employees.reduce((sum, emp) => sum + getHoursForDay(emp.id, day), 0)
  }

  const handleCellDoubleClick = (employeeId: string, day: number) => {
    const hours = getHoursForDay(employeeId, day)
    const hourValue = parseFloat(String(hours))
    // Start with empty string so user can type freely (no pre-filled value to confuse)
    const stringValue = ""
    console.log(`[CELL OPEN] empId=${employeeId}, day=${day}, currentHours=${hourValue}`)
    setEditingCell({ empId: employeeId, day, value: stringValue })
  }

  const saveCellData = () => {
    if (!editingCell) return

    const trimmedValue = editingCell.value.trim()
    console.log(`[SAVE START] Raw input: "${editingCell.value}", Trimmed: "${trimmedValue}"`)
    
    // If empty, save as 0
    if (!trimmedValue) {
      console.log(`[ATTENDANCE SAVE] Empty → 0`)
      
      // Create the date the same way updateAttendance does
      const date = new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), editingCell.day))
      const dateStr = date.toISOString().split("T")[0]
      
      // Optimistic update
      const optimisticRecord: AttendanceRecord = {
        id: `temp-${editingCell.empId}-${dateStr}`,
        employee_id: editingCell.empId,
        date: dateStr,
        hours_worked: 0,
        employee: employees.find(e => e.id === editingCell.empId)!
      }
      
      setAttendance((prev) => {
        const filtered = prev.filter((a) => {
          const aDateStr = typeof a.date === 'string' 
            ? a.date.split('T')[0] 
            : new Date(a.date).toISOString().split('T')[0]
          return !(a.employee_id === editingCell.empId && aDateStr === dateStr)
        })
        return [...filtered, optimisticRecord]
      })
      
      setEditingCell(null)
      updateAttendance(editingCell.empId, editingCell.day, 0).then(() => {
        console.log(`[SAVE SUCCESS] Cleared cell`)
      })
      return
    }

    // Parse to float and validate
    const hoursValue = parseFloat(trimmedValue)
    console.log(`[PARSE] "${trimmedValue}" → parseFloat = ${hoursValue}`)
    
    if (isNaN(hoursValue) || hoursValue < 0 || hoursValue > 24) {
      console.error(`[ATTENDANCE ERROR] Invalid: "${trimmedValue}" (${hoursValue})`)
      setEditingCell(null)
      return
    }

    // Format to exactly 2 decimal places
    const finalHours = parseFloat(hoursValue.toFixed(2))
    console.log(`[FORMAT] ${hoursValue} → .toFixed(2) → ${hoursValue.toFixed(2)} → parseFloat → ${finalHours}`)

    // Create the date the same way updateAttendance does
    const date = new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), editingCell.day))
    const dateStr = date.toISOString().split("T")[0]

    // OPTIMISTIC UPDATE: Add to state IMMEDIATELY so getHoursForDay finds it
    const optimisticRecord: AttendanceRecord = {
      id: `temp-${editingCell.empId}-${dateStr}`,
      employee_id: editingCell.empId,
      date: dateStr,
      hours_worked: finalHours,
      employee: employees.find(e => e.id === editingCell.empId)!
    }
    
    setAttendance((prev) => {
      const filtered = prev.filter((a) => {
        const aDateStr = typeof a.date === 'string' 
          ? a.date.split('T')[0] 
          : new Date(a.date).toISOString().split('T')[0]
        return !(a.employee_id === editingCell.empId && aDateStr === dateStr)
      })
      return [...filtered, optimisticRecord]
    })
    
    // Clear editing mode
    setEditingCell(null)
    
    // Then sync with API
    updateAttendance(editingCell.empId, editingCell.day, finalHours).then(() => {
      console.log(`[SAVE SUCCESS] Saved ${finalHours}`)
    })
  }

  const handleCellBlur = () => {
    saveCellData()
  }

  const handleCellKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      saveCellData()
    } else if (e.key === "Escape") {
      setEditingCell(null)
    }
  }

  const getCellStyle = (hours: number) => {
    if (hours === 0) {
      return "bg-slate-900/40 border border-slate-700/30"
    } else if (hours > 0 && hours < 1) {
      return "bg-cyan-500/15 border border-cyan-400/40 shadow-lg shadow-cyan-500/15"
    } else if (hours === 1) {
      return "bg-cyan-500/20 border border-cyan-400/50 shadow-lg shadow-cyan-500/20"
    } else if (hours > 1) {
      return "bg-cyan-500/30 border border-cyan-300/80 shadow-lg shadow-cyan-400/30"
    }
    return "bg-cyan-300/10 border border-cyan-400/30"
  }

  const getDaysInCurrentMonth = getDaysInMonth(currentDate)
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-extrabold text-white">Gestión de Personal</h1>
          <Button
            onClick={() => setIsAddingEmployee(true)}
            className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-bold"
          >
            <Plus className="w-5 h-5 mr-2" /> Agregar Empleado
          </Button>
        </div>

        {/* Month Selector */}
        <div className="flex items-center justify-between mb-8 bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
          <button onClick={prevMonth} className="p-2 hover:bg-cyan-500/20 rounded-lg transition">
            <ChevronLeft className="w-5 h-5 text-cyan-400" />
          </button>
          <h2 className="text-2xl font-bold text-cyan-300">
            {format(currentDate, "MMMM yyyy", { locale: undefined })}
          </h2>
          <button onClick={nextMonth} className="p-2 hover:bg-cyan-500/20 rounded-lg transition">
            <ChevronRight className="w-5 h-5 text-cyan-400" />
          </button>
        </div>

        {/* Attendance Grid */}
        {isLoading ? (
          <div className="text-center py-12 text-cyan-300">Cargando...</div>
        ) : (
          <div className="overflow-x-auto bg-black/60 backdrop-blur-xl border border-cyan-500/30 rounded-2xl">
            <table className="w-full">
              <thead>
                <tr className="border-b border-cyan-500/30">
                  <th className="px-6 py-4 text-left text-cyan-300 font-bold min-w-[200px]">Empleado</th>
                  <th className="px-4 py-4 text-center text-cyan-300 font-bold text-sm min-w-[40px]">Cargo</th>
                  {Array.from({ length: getDaysInCurrentMonth }, (_, i) => {
                    const day = i + 1
                    const dayTotal = getHoursDayTotal(day)
                    return (
                      <th key={i} className="px-2 py-4 text-center min-w-[60px]">
                        <div className="text-cyan-300 font-bold text-xs">{day}</div>
                        <div className="text-cyan-400/60 text-xs mt-1">{dayTotal.toFixed(1)}h</div>
                      </th>
                    )
                  })}
                  <th className="px-6 py-4 text-center text-cyan-300 font-bold min-w-[120px]">Total</th>
                  <th className="px-6 py-4 text-center text-cyan-300 font-bold min-w-[150px]">Nómina</th>
                  <th className="px-4 py-4 text-center text-red-400 font-bold min-w-[50px]">Acción</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => {
                  const totalHours = getTotalHours(emp.id)
                  const dailySalary = parseFloat(emp.daily_salary)
                  const monthlyPayment = totalHours * dailySalary

                  return (
                    <tr key={emp.id} className="border-b border-cyan-500/20 hover:bg-cyan-500/5 transition">
                      <td className="px-6 py-4 font-bold text-white">{emp.name}</td>
                      <td className="px-4 py-4 text-sm text-cyan-300">{emp.position}</td>
                      {Array.from({ length: getDaysInCurrentMonth }, (_, i) => {
                        const day = i + 1
                        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
                        const cellKey = `${emp.id}-${date.toISOString().split('T')[0]}`
                        const hours = getHoursForDay(emp.id, day)
                        const isEditingThisCell = editingCell?.empId === emp.id && editingCell?.day === day
                        const editingValue = isEditingThisCell ? (parseFloat(editingCell.value) || 0) : hours

                        return (
                          <td
                            key={cellKey}
                            className={`px-2 py-3 text-center transition cursor-pointer rounded ${getCellStyle(editingValue)}`}
                            onDoubleClick={() => handleCellDoubleClick(emp.id, day)}
                          >
                            {isEditingThisCell ? (
                              <input
                                ref={inputRef}
                                autoFocus
                                type="text"
                                inputMode="decimal"
                                placeholder="0.00"
                                autoComplete="off"
                                value={editingCell.value}
                                onChange={(e) => {
                                  const newValue = e.target.value
                                  // Allow: empty, numbers, one decimal point, and combinations
                                  const isValid = /^[0-9]*\.?[0-9]*$/.test(newValue)
                                  if (isValid) {
                                    console.log(`[CELL TYPING] ${cellKey}: "${newValue}" (valid=${isValid})`)
                                    setEditingCell((prev) =>
                                      prev ? { ...prev, value: newValue } : null
                                    )
                                  } else {
                                    console.log(`[CELL TYPING BLOCKED] ${cellKey}: "${newValue}" (valid=${isValid})`)
                                  }
                                }}
                                onBlur={handleCellBlur}
                                onKeyDown={handleCellKeyDown}
                                className="w-full bg-transparent text-center text-white font-bold outline-none border-0"
                              />
                            ) : (
                              <span
                                className={`font-semibold ${
                                  hours === 0
                                    ? "text-slate-500/70"
                                    : hours === 1
                                      ? "text-cyan-300"
                                      : hours > 1
                                        ? "text-cyan-100 font-bold"
                                        : "text-cyan-400"
                                }`}
                              >
                                {hours.toFixed(2)}
                              </span>
                            )}
                          </td>
                        )
                      })}
                      <td className="px-6 py-4 text-center font-bold text-cyan-300">{totalHours.toFixed(2)}</td>
                      <td className="px-6 py-4 text-center font-bold text-green-400">
                        ${monthlyPayment.toFixed(2)}
                      </td>
                      <td className="px-4 py-4 text-center space-x-2">
                        <button
                          onClick={() => {
                            setSelectedEmployeeForSalary(emp)
                            setNewSalary(emp.daily_salary)
                            setIsEditingSalary(true)
                          }}
                          className="p-2 hover:bg-cyan-500/20 rounded-lg transition inline-block"
                        >
                          <Edit className="w-5 h-5 text-cyan-400" />
                        </button>
                        <button
                          onClick={() => deleteEmployee(emp.id)}
                          className="p-2 hover:bg-red-500/20 rounded-lg transition inline-block"
                        >
                          <Trash2 className="w-5 h-5 text-red-400" />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Add Employee Dialog */}
        <Dialog open={isAddingEmployee} onOpenChange={setIsAddingEmployee}>
          <DialogContent className="bg-black border border-cyan-500/30">
            <DialogHeader>
              <DialogTitle className="text-cyan-300">Agregar Nuevo Empleado</DialogTitle>
              <DialogDescription className="text-cyan-300/70">Completa los datos del empleado</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Nombre"
                value={newEmployee.name}
                onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                className="bg-black/70 border-cyan-500/30 text-white"
              />
              <Input
                placeholder="Cargo"
                value={newEmployee.position}
                onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
                className="bg-black/70 border-cyan-500/30 text-white"
              />
              <Input
                placeholder="Sueldo Diario"
                type="number"
                step="0.01"
                value={newEmployee.daily_salary}
                onChange={(e) => setNewEmployee({ ...newEmployee, daily_salary: e.target.value })}
                className="bg-black/70 border-cyan-500/30 text-white"
              />
              <div className="flex gap-2">
                <Button
                  onClick={addEmployee}
                  className="flex-1 bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-bold"
                >
                  Guardar
                </Button>
                <Button
                  onClick={() => setIsAddingEmployee(false)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Edit Salary Dialog */}
        <Dialog open={isEditingSalary} onOpenChange={setIsEditingSalary}>
          <DialogContent className="bg-black border border-cyan-500/30">
            <DialogHeader>
              <DialogTitle className="text-cyan-300">Editar Nómina</DialogTitle>
              <DialogDescription className="text-cyan-300/70">
                {selectedEmployeeForSalary?.name}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Sueldo Diario"
                type="number"
                step="0.01"
                value={newSalary}
                onChange={(e) => setNewSalary(e.target.value)}
                className="bg-black/70 border-cyan-500/30 text-white"
              />
              <div className="flex gap-2">
                <Button
                  onClick={updateEmployeeSalary}
                  className="flex-1 bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-bold"
                >
                  Guardar
                </Button>
                <Button
                  onClick={() => setIsEditingSalary(false)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
