import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const pageName = req.nextUrl.pathname; // Obtiene el pathname actual
  const isCustomerPage = pageName.startsWith("/[customerSlug]");

  if (!isCustomerPage) {
    return NextResponse.next(); // Continúa con la siguiente operación si no es la página de cliente
  }

  // Aquí puedes realizar operaciones adicionales si es la página de cliente
  // Por ejemplo, realizar autenticación o autorización

  return NextResponse.next(); // Continúa con la siguiente operación
}

// Opcional: Configurar el matcher para que solo se aplique a las rutas específicas
export const config = {
  matcher: '/([customerSlug])/:path*', // Define el matcher según tus necesidades
};
