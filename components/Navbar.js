import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { nombreBot } from "../config"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/img/icon.jpg" alt="RoleManager Bot Logo" width={40} height={40} />
          <span>{nombreBot}</span>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>
          Inicio
        </Link>
        <Link href="/docs" className={styles.navLink}>
          Documentación
        </Link>
        <a href="https://discord.com/oauth2/authorize?client_id=1364981410200424520&permissions=1099914300416&integration_type=0&scope=bot+applications.commands" target="_blank" className={styles.navButton}>
          Añadir a Discord
        </a>
      </div>
    </nav>
  )
}
