import React from 'react'
import Navbar from '../../components/Navbar'
import styles from "../../styles/Terms.module.css"
import Footer from "../../components/Footer"
import { nombreBot } from '../../config'

const Terminos = () => {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h1>Términos y Condiciones</h1>
          <p>Última actualización: 26 de Abril de 2025</p>
        </div>

        <div>
          <h2>1. Descripción del Bot</h2>
          <p>
            Este bot de Discord, llamado <strong>{nombreBot}</strong>, está diseñado para gestionar roles en servidores
            de Discord mediante comandos interactivos. Las funciones incluyen la creación de contraseñas para roles, la
            asignación de roles mediante contraseñas, la gestión de grupos de roles, y otras características relacionadas
            con la administración de roles y permisos.
          </p>

          <h2>2. Aceptación de los Términos</h2>
          <p>
            Al usar <strong>{nombreBot}</strong>, los usuarios aceptan cumplir con los términos y condiciones aquí establecidos.
            Si no está de acuerdo con estos términos, absténgase de usar este bot.
          </p>

          <h2>3. Funcionalidades del Bot</h2>
          <ul>
            <li><strong>Gestión de Roles:</strong> Asignación y eliminación de roles mediante contraseñas.</li>
            <li><strong>Gestión de Grupos:</strong> Configuración y administración de grupos de roles (roles maestros y asignables).</li>
            <li><strong>Comandos Específicos para Administradores:</strong> Incluye funcionalidades como la configuración y eliminación de roles protegidos.</li>
            <li><strong>Comandos para Usuarios con Roles Maestros:</strong> Comandos avanzados para gestionar roles asignados a grupos específicos.</li>
          </ul>

          <h2>4. Responsabilidad del Usuario</h2>
          <p>
            El usuario es responsable de utilizar el bot de manera adecuada y de acuerdo con las reglas del servidor donde
            esté implementado. No nos hacemos responsables de malentendidos o conflictos surgidos del mal uso de las
            funcionalidades del bot.
          </p>

          <h2>5. Privacidad y Manejo de Datos</h2>
          <p>
            El bot no almacena información sensible de los usuarios de manera permanente. Los datos procesados, como
            nombres de roles y contraseñas asociadas, son gestionados de manera temporal para cumplir con las
            funciones del bot y se eliminan después de su uso o cuando se eliminan las configuraciones relacionadas.
            No recopilamos ni compartimos información personal con terceros.
          </p>

          <h2>6. Limitaciones de Responsabilidad</h2>
          <p>
            <strong>{nombreBot}</strong> se proporciona tal como está, sin garantías de disponibilidad o funcionalidad
            ininterrumpida. No somos responsables de problemas técnicos o conflictos surgidos del uso del bot.
          </p>

          <h2>7. Restricciones de Uso</h2>
          <p>
            Está prohibido usar el bot en servidores donde se infrinjan las normas de Discord, así como para actividades
            ilegales o malintencionadas. Los administradores del bot se reservan el derecho de bloquear su uso en servidores
            que incumplan estas reglas.
          </p>

          <h2>8. Actualizaciones y Cambios</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios se anunciarán
            en el servidor principal de soporte del bot o mediante un mensaje global.
          </p>

          <h2>9. Contacto y Soporte</h2>
          <p>Para dudas o problemas con el bot, puede contactarnos a través de:</p>
          <ul>
            <li><strong>Correo Electrónico:</strong> <span className={styles.contactEmail}></span></li>
            <li><strong>Servidor de Soporte de Discord:</strong> <a href="https://discord.gg/BFSYsnNPh5">Server de Discord</a></li>
          </ul>

          <h2>10. Propiedad Intelectual</h2>
          <p>
            El bot <strong>{nombreBot}</strong> y su código fuente son propiedad del desarrollador. Queda prohibido clonar,
            modificar o distribuir el bot sin autorización expresa.
          </p>

          <h2>11. Terminación del Servicio</h2>
          <p>
            Nos reservamos el derecho de suspender o eliminar el servicio del bot sin previo aviso en caso de circunstancias
            extraordinarias o incumplimientos de estos términos.
          </p>

          <h2>12. Ley Aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de Argentina. Cualquier disputa relacionada con el uso de este bot será 
            resuelta bajo la jurisdicción de los tribunales de Buenos Aires, Argentina.</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Terminos