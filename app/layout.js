import "../styles/globals.css"
import { nombreBot } from "../config"

export const metadata = {
  title: nombreBot +" Bot - Gestión de roles para Discord",
  description: "Bot de Discord para gestionar roles dentro de servidores",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="./img/icon.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
