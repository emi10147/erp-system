"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Factory } from "lucide-react"
import "../login.css"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })

      if (response.ok) {
        router.push("/")
        router.refresh()
      } else {
        setError("Usuario o contraseña incorrectos")
      }
    } catch (error) {
      setError("Error al iniciar sesión")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50 mb-6 animate-bounce">
            <Factory className="w-8 h-8 text-white" strokeWidth={2.5} />
          </div>
          
          {/* Animated Title */}
          <div className="mb-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">
              <span className="animated-title inline-block">
                Hortaleg La Huerta
              </span>
            </h1>
            <p className="text-xl font-semibold text-blue-400 animate-fade-in">
              S.A
            </p>
            <p className="text-sm sm:text-base text-slate-400 font-medium mt-3 animate-fade-in-delayed">
              Enterprise Resource Planning
            </p>
          </div>
        </div>

        {/* Login Card */}
        <div className="glass-card-premium p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Iniciar Sesión</h2>
          <p className="text-slate-400 text-sm mb-6 font-medium">Ingresa tus credenciales para acceder</p>

          <form onSubmit={onSubmit} className="space-y-5">
            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-slate-300 text-sm font-semibold">
                Usuario
              </Label>
              <Input
                id="username"
                type="text"
                placeholder=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-modern"
                disabled={isLoading}
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-300 text-sm font-semibold">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-modern"
                disabled={isLoading}
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm font-medium">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary h-12 text-base"
            >
              {isLoading ? "Verificando..." : "Acceder"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
