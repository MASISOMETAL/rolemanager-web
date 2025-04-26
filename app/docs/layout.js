import { nombreBot } from "../../config"

export const metadata = {
  title: "Documentación - " + nombreBot + " Bot",
  description: "Documentación completa del bot de gestión de roles para Discord",
}

export default function DocsLayout({ children }) {
  return <>{children}</>
}
