import { cookies } from "next/headers"

const SESSION_TOKEN = "erp-session-token"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(SESSION_TOKEN)

    if (token?.value) {
      return Response.json({ authenticated: true })
    } else {
      return Response.json({ authenticated: false }, { status: 401 })
    }
  } catch (error) {
    return Response.json({ authenticated: false }, { status: 401 })
  }
}
