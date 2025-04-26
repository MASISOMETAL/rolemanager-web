import Link from "next/link"
import styles from "../styles/Footer.module.css"
import { nombreBot } from "../config"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>{nombreBot} Bot</h3>
          <p>La solución definitiva para gestionar roles en tu servidor de Discord.</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Enlaces</h3>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/docs">Documentación</Link>
            </li>
            <li>
              <a href="https://discord.com/oauth2/authorize?client_id=1364981410200424520&permissions=1099914300416&integration_type=0&scope=bot+applications.commands" target="_blank">Añadir a Discord</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Legales</h3>
          <ul>
            <li>
              <a href="/politica-de-privacidad">Politica de privacidad</a>
            </li>
            <li>
              <a href="/terminos-y-condiciones">Términos y condiciones</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} {nombreBot} Bot. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
