import { cookies } from "next/headers"

const VALID_USERNAME = "hortaleg2026"
const VALID_PASSWORD = "Hortaleg1600!"
const SESSION_TOKEN = "erp-session-token"

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      // Crear token simple
      const token = Buffer.from(`${username}:${Date.now()}`).toString("base64")
      
      // Establecer cookie
      const cookieStore = await cookies()
      cookieStore.set(SESSION_TOKEN, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60, //30 días
      })

      return Response.json({ success: true })
    } else {
      return Response.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      )
    }
  } catch (error) {
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(SESSION_TOKEN)
    
    return Response.json({isLoggedIn: !!token })
  } catch (error) {
    return Response.json( { isLoggedIn: false })
  }
}
