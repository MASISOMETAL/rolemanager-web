import styles from "../styles/DocsContent.module.css"
import { nombreBot } from "../config"
import Image from "next/image"

export default function DocsContent({ activeSection }) {
  const contentData = {
    introduction: {
      title: "Introducción",
      content: (
        <>
          <p>
            Bienvenido a la documentación oficial de {nombreBot} Bot, la solución definitiva para gestionar roles en tu
            servidor de Discord.
          </p>
          <p>
            {nombreBot} Bot te permite simplificar la administración de roles, crear grupos de roles y permitir a los
            usuarios autoasignarse roles de forma segura y controlada.
          </p>
          <p>
            Esta documentación te guiará a través de todas las funcionalidades del bot, desde la configuración inicial
            hasta los comandos avanzados para administradores y usuarios.
          </p>

          <h2>¿Por que usar {nombreBot}?</h2>

          <h3>- Brindar Roles estando offline</h3>
          <p>
            RolManager nos brinda la posibilidad como administradores de crear passwords para poder brindar un rol particular,
            luego si brindamos este password a cualquier usuario, este podrá adquirir dicho rol, sin necesidad de estar nosotros
            conectados.
          </p>
          <p>Por ejemplo si un usuario de tu server, se comunica a travez de otra pataforma para pedirte un rol, nosotros podemos
            crear un password para dicho rol, y pasarselo al usuario todo fuera del ambiente de discord. Sin necesidad de comprobar
            la identidad del usuario dentro del servidor.
          </p>

          <h3>- ¿Que pasa si mas usuarios quieren usar el password?</h3>

          <p>
            {nombreBot} permite solo un uso de esta contraseña, luego que se usa una vez, y el usuario adquiere dicho rol,
            la contraseña se borra, asegurando que nadie mas pueda usarla
          </p>

          <h3>Crear mini comunidades o alianzas en tu server</h3>

          <p>
            {nombreBot} permite crear grupo de roles, imagina que tienes en tu servidor varias alianzas, y cada alianza tiene
            un lider, y tu quieres crear un canal, para que cada alianza tenga de manera privada su conversaciones. El lider
            de cada aliana, debe pedirte que asignes de forma manual el rol correspondiente a su alianza. {nombreBot} permite
            que puedas elegir un usuario (Lider de alianza) para darle un "Rol Master", ese rol, va a estar asociado con
            un rol asignable, y este lider de alianza va a poder crear passwords, para el brindarselos a sus miembros y que
            estos puedan adquirir el rol de su alianza, sin necesidad de que estes online.
          </p>

          <h3>Rol Master y Rol asignado</h3>

          <p>
            Cada dueño de Rol Master, puede gestionar como desee los usuarios que tengan el rol asignado, tanto ver que usuarios
            poseen dicho rol asignado, como quitarles el rol asignado, o seguir creando password, para pasarselos a otros usuarios
            y añadirlos a su rol (alianza).
          </p>
        </>
      ),
    },
    "getting-started": {
      title: "Comencemos",
      content: (
        <>
          <p>Para comenzar a utilizar {nombreBot} Bot, sigue estos sencillos pasos:</p>
          <ol>
            <li>
              Añade el bot a tu servidor de Discord utilizando el botón "Añadir a Discord" en la página principal.
            </li>
            <li>Asegúrate de que el bot tenga los permisos necesarios para gestionar roles.</li>
            <li>
              Asegurate que el bot tenga mayor prioridad que los roles que va a gestionar
              <Image
                src="./img/prioridadrol.jpg"
                alt="prioridad rol"
                className={styles.img}
                width={400}
                height={300}
              />
            </li>
            <li>¡Listo! Ahora puedes comenzar a utilizar todas las funcionalidades del bot.</li>
          </ol>
          <p>
            <strong>* Recuerda que para utilizar comandos administrativos, necesitas tener permisos de administrador en el
              servidor.</strong>
          </p>
        </>
      ),
    },
    managerolinfo: {
      title: "Comando /managerolinfo",
      content: (
        <>
          <p>
            <strong>Uso:</strong> <code>/managerolinfo</code>
          </p>
          <p>
            <strong>Descripción:</strong> Este comando te brinda informacion detallada de todos los comandos
          </p>
          <p>
            <strong>Parámetros:</strong>
          </p>
          <ul>
            <li>
              Sin parametros.
            </li>
          </ul>
          <p>
            <strong>Permisos requeridos:</strong> Ninguno
          </p>
        </>
      ),
    },
    setrol: {
      title: "Comando /setrol",
      content: (
        <>
          <p>
            <strong>Uso:</strong> <code>/setrol [nombre_rol] [contraseña]</code>
          </p>
          <p>
            <strong>Descripción:</strong> Este comando permite a los administradores crear un registro asignando un password
            a un rol, para que cualquiera que use el comando <code>/joinrol</code> pueda unirse luego.
          </p>
          <p>
            La contraseña generada, solo tiene un uso y no puede repetirse, luego de ser usada, esta es borrada.
          </p>
          <p>
            <strong>Parámetros:</strong>
          </p>
          <ul>
            <li>
              <code>nombre_rol</code>: El nombre del rol que deseas crear o gestionar.
            </li>
            <li>
              <code>contraseña</code>: La contraseña que debe poner el usuario que usa <code>/joinrol</code> para poder
              obtener el rol.
            </li>
          </ul>
          <p>
            <strong>Ejemplo:</strong>
          </p>
          <Image
            src="./img/setrol.jpg"
            alt="prioridad rol"
            width={665}
            height={115}
          />
          <p>
            <strong>Permisos requeridos:</strong> Administrador
          </p>
        </>
      ),
    },
    seerol: {
      title: "Comando /seerol",
      content: (
        <>
          <p>
            <strong>Uso:</strong> <code>/seerol</code>
          </p>
          <p>
            <strong>Descripción:</strong> Este comando permite a los administradores ver todos los registros de contraseñas
            generadas con el comando <code>/setrol</code>.
          </p>
          <p>
            <strong>Parámetros:</strong>
          </p>
          <ul>
            <li>
              Ninguno.
            </li>
          </ul>
          <p>
            <strong>Ejemplo:</strong>
          </p>
          <Image
            src="./img/seerol.jpg"
            alt="prioridad rol"
            width={711}
            height={269}
          />
          <p>
            <strong>Permisos requeridos:</strong> Administrador
          </p>
        </>
      ),
    },
    delrol: {
      title: "Comando /delrol",
      content: (
        <>
          <p>
            <strong>Uso:</strong> <code>/delrol [contraseña]</code>
          </p>
          <p>
            <strong>Descripción:</strong> Este comando permite a los administradores eliminar un registro poniendo su contraseña,
            como cada contraseña es unica, este solo eliminará el registro correspondiente a la misma.
          </p>
          <p>
            <strong>Parámetros:</strong>
          </p>
          <ul>
            <li>
              <code>contraseña</code>: La contraseña correspondiente al registro creado.
            </li>
          </ul>
          <p>
            <strong>Ejemplo:</strong>
          </p>
          <Image
            src="./img/delrol.jpg"
            alt="prioridad rol"
            width={658}
            height={307}
          />
          <p>
            <strong>Permisos requeridos:</strong> Administrador
          </p>
          <p>
            <strong>Nota:</strong> Este comando no elimina el rol del servidor, solo lo elimina de la gestión del bot.
          </p>
        </>
      ),
    },
    groupconfig: {
      title: "Comando /groupconfig",
      content: (
        <>
          <p>
            <strong>Uso:</strong> <code>/groupconfig [rol_maestro] [rol_asignable]</code>
          </p>
          <p>
            <strong>Descripción:</strong> Este comando permite a los administradores crear un registro, que funcionará como
            relación entre el rol_maestro y el rol_asignable.
          </p>
          <p>
            Luego aquellos que tengan el rol_maestro podrán crear contraseñas para asignar el rol_asignable a otros usuarios.
          </p>
          <p>
            Es Necesario tener creados de antemano el rol_maestro y el rol_asignable, puedes tener varias relaciones, o sea,
            varios roles maestros
          </p>
          <Image
            src="./img/groupconfig-create.jpg"
            alt="prioridad rol"
            width={218}
            height={381}
          />
          <p>
            <strong>Parámetros:</strong>
          </p>
          <ul>
            <li>
              <code>rol_maestro</code>: El nombre del rol que tendrá el poder de crear contraseñas para que con el comado
              <code>/joingrouprol</code> puedan obtener el rol asignable
            </li>
            <li>
              <code>rol_asignable</code>: El nombre del rol que se asignará a aquellos que usen el comando
              <code>/joingrouprol</code> y coloquen el password correspondiente.
            </li>
          </ul>
          <p>
            <strong>Ejemplo:</strong>
          </p>
          <Image
            src="./img/groupconfig.jpg"
            alt="prioridad rol"
            width={668}
            height={112}
          />
          <p>
            <strong>Permisos requeridos:</strong> Administrador
          </p>
          <p>
            <strong>Nota:</strong> Un rol_maestro no puede estar asociado a mas de un rol_asignable.
          </p>
        </>
      ),
    },
    groupconfigsee: {
      title: "Comando /groupconfigsee",
      content: (
        <>
          <p>
            <strong>Uso:</strong> <code>/groupconfigsee</code>
          </p>
          <p>
            <strong>Descripción:</strong> Este comando permite a los administradores ver todos los registros de las relaciones
            creadas con <code>/groupconfig</code> en su server.
          </p>
          <p>
            <strong>Parámetros:</strong>
          </p>
          <ul>
            <li>
              Ninguno.
            </li>
          </ul>
          <p>
            <strong>Ejemplo:</strong>
          </p>
          <Image
            src="./img/groupconfigsee.jpg"
            alt="prioridad rol"
            width={719}
            height={256}
          />
          <p>
            <strong>Permisos requeridos:</strong> Administrador
          </p>
        </>
      ),
    },
    groupconfigdel: {
      title: "Comando /groupconfigdel",
      content: (
        <>
          <p>
            <strong>Uso:</strong> <code>/groupconfigdel [rol_maestro]</code>
          </p>
          <p>
            <strong>Descripción:</strong> Este comando permite a los administradores eliminar un registro de las relaciones antes
            creadas con el comando <code>/groupconfig</code>
          </p>
          <p>
            <strong>Parámetros:</strong>
          </p>
          <ul>
            <li>
              <code>rol_maestro</code>: El nombre del rol maestro que deseas eliminar su relación.
            </li>
          </ul>
          <p>
            <strong>Ejemplo:</strong>
          </p>
          <Image
            src="./img/groupconfigdel.jpg"
            alt="prioridad rol"
            width={672}
            height={253}
          />
          <p>
            <strong>Permisos requeridos:</strong> Administrador
          </p>
          <p>
            <strong>Nota:</strong> Este comando no elimina el rol del servidor, solo elimina su relación.
          </p>
        </>
      ),
    },
    setgrouprol: {
      title: "Comando /setgrouprol",
      content: (
        <>
          <p>
            <strong>Uso:</strong> <code>/setgrouprol [rol_maestro] [contraseña]</code>
          </p>
          <p>
            <strong>Descripción:</strong> Este comando permite "solo a los usuarios que tengan el rol maestro", asignar una
            contraseña, está contraseña, luego será usada con <code>/joingrouprol</code> por otro usuario, para poder obtener
            el rol_asignable de ese rol_maestro.
          </p>
          <p>
            Esta contraseña es de solo un uso, luego que un usuario la utilice, la contraseña será borrada.
          </p>
          <p>
            La contraseña no puede repetirse, incluso entre otros rol_maestro.
          </p>
          <p>
            <strong>Parámetros:</strong>
          </p>
          <ul>
            <li>
              <code>rol_maestro</code>: El nombre del rol_maestro asociado al rol_asignable al que le quieres poner una contraseña.
            </li>
            <li>
              <code>contraseña</code>: Contraseña que pondras, para que otro usuario la use y pueda obtener el rol asignable.
            </li>
          </ul>
          <p>
            <strong>Ejemplo:</strong>
          </p>
          <Image
            src="./img/setgrouprol.jpg"
            alt="prioridad rol"
            width={697}
            height={132}
          />
          <p>
            <strong>Permisos requeridos:</strong> rol_maestro
          </p>
        </>
      ),
    },
    seegrouprol: {
      title: "Comando /seegrouprol",
      content: (
        <>
          <p>
            <strong>Uso:</strong> <code>/seegrouprol [rol_maestro]</code>
          </p>
          <p>
            <strong>Descripción:</strong> Este comando permite a los que tienen el rol_maestro, ver todos los registros creados
            correspondiente al rol_maestro que se pasó como parametro.
          </p>
          <p>
            Ten en cuenta que solo podras ver los registros del rol_maestro que posees, no el de los demas.
          </p>
          <p>
            <strong>Parámetros:</strong>
          </p>
          <ul>
            <li>
              <code>rol_maestro</code>: El nombre del rol_maestro del cual quieres ver todos los registros de contraseñas creadas.
            </li>
          </ul>
          <p>
            <strong>Ejemplo:</strong>
          </p>
          <Image
            src="./img/seegrouprol.jpg"
            alt="prioridad rol"
            width={723}
            height={267}
          />
          <p>
            <strong>Permisos requeridos:</strong> rol_maestro
          </p>
        </>
      ),
    },
    delgrouprol: {
      title: "Comando /delgrouprol",
      content: (
        <>
          <p>
            <strong>Uso:</strong> <code>/delgrouprol [contraseña]</code>
          </p>
          <p>
            <strong>Descripción:</strong> Este comando permite a quienes tengan el rol_maestro poder eliminar un registro de una
            contraseña asociada a un rol, tenga en cuenta que solo podrá borrar la contraseña que esté asociada a su rol_maestro.
          </p>
          <p>
            <strong>Parámetros:</strong>
          </p>
          <ul>
            <li>
              <code>contraseña</code>: La contraseña del registro que deseas eliminar.
            </li>
          </ul>
          <p>
            <strong>Ejemplo:</strong>
          </p>
          <Image
            src="./img/delgrouprol.jpg"
            alt="prioridad rol"
            width={705}
            height={252}
          />
          <p>
            <strong>Permisos requeridos:</strong> rol_maestro
          </p>
        </>
      ),
    },
    seemember: {
      title: "Comando /seemember",
      content: (
        <>
          <p>
            <strong>Uso:</strong> <code>/seemember [rol_maestro]</code>
          </p>
          <p>
            <strong>Descripción:</strong> Este comando permite a quienes tengan el rol_maestro, poder ver todos los miembros
            que tienen el rol_asignable.
          </p>
          <p>
            Ten en cuenta que solo podras ver a los miembros si tienes el rol_maestro asignado al rol_asignable
          </p>
          <p>
            <strong>Parámetros:</strong>
          </p>
          <ul>
            <li>
              <code>rol_maestro</code>: el nombre del rol_maestro que está asociado al rol_asignable.
            </li>
          </ul>
          <p>
            <strong>Ejemplo:</strong>
          </p>
          <Image
            src="./img/seemember.jpg"
            alt="prioridad rol"
            width={735}
            height={283}
          />
          <p>
            <strong>Permisos requeridos:</strong> rol_maestro
          </p>
        </>
      ),
    },
    delmember: {
      title: "Comando /delmember",
      content: (
        <>
          <p>
            <strong>Uso:</strong> <code>/delmember [rol_asignable] [usuario]</code>
          </p>
          <p>
            <strong>Descripción:</strong> Este comando permite a quienes tengan el rol_maestro, quitarle el rol_asignable
            a un usuario.
          </p>
          <p>
            Solo puedes quitar el rol_asignable si sos rol_maestro y ambos tienen relacion antes creada por el administrador.
          </p>
          <p>
            <strong>Parámetros:</strong>
          </p>
          <ul>
            <li>
              <code>rol_asignable</code>: El nombre del rol_maestro asociado al rol_asignable que pertenece el usuario.
            </li>
            <li>
              <code>usuario</code>: El nombre del usuario que deseas quitarle el rol_asignable.
            </li>
          </ul>
          <p>
            <strong>Ejemplo:</strong>
          </p>
          <Image
            src="./img/delmember.jpg"
            alt="prioridad rol"
            width={739}
            height={295}
          />
          <p>
            <strong>Permisos requeridos:</strong> rol_maestro
          </p>
        </>
      ),
    },
    joinrol: {
      title: "Comando /joinrol",
      content: (
        <>
          <p>
            <strong>Uso:</strong> <code>/joinrol [contraseña]</code>
          </p>
          <p>
            <strong>Descripción:</strong> Este comando permite a los usuarios autoasignarse un rol gestionado por el administrador
            por el comando <code>/setrol</code>, usando una contraseña.
          </p>
          <p>
            <strong>Parámetros:</strong>
          </p>
          <ul>
            <li>
              <code>contraseña</code>: La contraseña para poder adquirir el rol.
            </li>
          </ul>
          <p>
            <strong>Ejemplo:</strong>
          </p>
          <Image
            src="./img/joinrol.jpg"
            alt="prioridad rol"
            width={738}
            height={134}
          />
          <p>
            <strong>Permisos requeridos:</strong> Ninguno
          </p>
        </>
      ),
    },
    joingrouprol: {
      title: "Comando /joingrouprol",
      content: (
        <>
          <p>
            <strong>Uso:</strong> <code>/joingrouprol [contraseña]</code>
          </p>
          <p>
            <strong>Descripción:</strong> Este comando permite a los usuarios autoasignarse un rol gestionado por el usuario
            con rol_maestro, por el comando <code>/setgrouprol</code>, usando una contraseña.
          </p>
          <p>
            <strong>Parámetros:</strong>
          </p>
          <ul>
            <li>
              <code>contraseña</code>: La contraseña para poder adquirir el rol_asignable.
            </li>
          </ul>
          <p>
            <strong>Ejemplo:</strong>
          </p>
          <Image
            src="./img/joingrouprol.jpg"
            alt="prioridad rol"
            width={727}
            height={125}
          />
          <p>
            <strong>Permisos requeridos:</strong> Ninguno
          </p>
        </>
      ),
    },
  }

  const { title, content } = contentData[activeSection] || contentData["introduction"]

  return (
    <div className={styles.content}>
      <h1 className={styles.contentTitle}>{title}</h1>
      <div className={styles.contentBody}>{content}</div>
    </div>
  )
}
