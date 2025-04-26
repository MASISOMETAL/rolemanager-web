import React from 'react'
import Navbar from '../../components/Navbar'
import styles from "../../styles/Privacity.module.css"
import Footer from '../../components/Footer'
import { nombreBot } from '../../config'

const Privacidad = () => {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h1>Política de Privacidad</h1>
          <p>Última actualización: 26 de Abril de 2025</p>
        </div>

        <div>
          <h2>1. Introducción</h2>
          <p>
            En <strong>{nombreBot}</strong>, valoramos su privacidad y estamos comprometidos a proteger cualquier información
            que se recopile durante el uso del bot. Este documento describe cómo gestionamos los datos, con qué propósito se
            utilizan y cómo garantizamos su seguridad.
          </p>

          <h2>2. Información Recopilada</h2>
          <p>
            <strong>{nombreBot}</strong> no recopila información personal identificable de los usuarios de manera permanente.
            Sin embargo, se procesan temporalmente los siguientes datos para garantizar la funcionalidad del bot:
          </p>
          <ul>
            <li>Nombres de los roles configurados en el servidor.</li>
            <li>Contraseñas asociadas a roles, que se eliminan una vez usadas o configuradas.</li>
            <li>IDs de usuarios y roles necesarios para ejecutar comandos específicos.</li>
          </ul>

          <h2>3. Uso de la Información</h2>
          <p>
            Los datos recopilados por el bot se utilizan exclusivamente para ejecutar las funciones relacionadas con la gestión
            de roles y la administración de permisos en servidores de Discord. Estos incluyen, pero no se limitan a:
          </p>
          <ul>
            <li>Asignar y eliminar roles de usuarios.</li>
            <li>Configurar y administrar contraseñas para roles.</li>
            <li>Gestionar grupos de roles (roles maestros y asignables).</li>
          </ul>
          <p>No compartimos ni utilizamos los datos con fines externos ni los proporcionamos a terceros.</p>

          <h2>4. Retención de Datos</h2>
          <p>
            Todos los datos procesados por <strong>{nombreBot}</strong> se almacenan temporalmente mientras el bot ejecuta el
            comando correspondiente. Una vez finalizada la operación, los datos se eliminan. No mantenemos registros permanentes
            de contraseñas, usuarios o roles.
          </p>

          <h2>5. Seguridad</h2>
          <p>
            Hemos implementado medidas de seguridad razonables para proteger los datos procesados por el bot. Aunque trabajamos
            para garantizar la seguridad de la información, no podemos garantizar una protección absoluta debido a las
            limitaciones de los servicios de terceros (como Discord).
          </p>

          <h2>6. Responsabilidad del Usuario</h2>
          <p>
            Los usuarios son responsables de usar <strong>{nombreBot}</strong> de forma adecuada y garantizar que los comandos
            ejecutados cumplan con las normas de su servidor. Además, los usuarios deben manejar contraseñas y datos sensibles
            de forma segura.
          </p>

          <h2>7. Cambios en la Política de Privacidad</h2>
          <p>
            Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios serán
            anunciados en el servidor principal de soporte del bot o mediante un mensaje global. Recomendamos a los usuarios
            revisar esta página periódicamente.
          </p>

          <h2>8. Contacto</h2>
          <p>Si tiene preguntas o inquietudes sobre esta Política de Privacidad, puede contactarnos en:</p>
          <ul>
            <li><strong>Correo Electrónico:</strong> <span className={styles.contactEmail}></span></li>
            <li><strong>Servidor de Soporte de Discord:</strong> <a href="https://discord.gg/BFSYsnNPh5">Server de Discord</a></li>
          </ul>

          <h2>9. Aceptación de esta Política</h2>
          <p>
            Al usar <strong>{nombreBot}</strong>, usted acepta esta Política de Privacidad. Si no está de acuerdo con alguno
            de sus términos, le pedimos que deje de usar el bot.
          </p>
        </div>
      </section>

      <Footer />

    </main>
  )
}

export default Privacidad