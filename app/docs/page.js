"use client"

import { useState } from "react"
import styles from "../../styles/Docs.module.css"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import DocsSidebar from "../../components/DocsSidebar"
import DocsContent from "../../components/DocsContent"

export default function Docs() {
  const [activeSection, setActiveSection] = useState("introduction")

  const docsStructure = {
    welcome: {
      title: "Bienvenido",
      items: [
        { id: "introduction", title: "Introducción" },
        { id: "getting-started", title: "Comencemos" },
      ],
    },
    admin: {
      title: "Comandos de Admin",
      items: [
        { id: "managerolinfo", title: "/managerolinfo" },
        { id: "setrol", title: "/setrol" },
        { id: "seerol", title: "/seerol" },
        { id: "delrol", title: "/delrol" },
        { id: "groupconfig", title: "/groupconfig" },
        { id: "groupconfigsee", title: "/groupconfigsee" },
        { id: "groupconfigdel", title: "/groupconfigdel" },
      ],
    },
    master: {
      title: "Comandos de Master Rol",
      items: [
        { id: "setgrouprol", title: "/setgrouprol" },
        { id: "seegrouprol", title: "/seegrouprol" },
        { id: "delgrouprol", title: "/delgrouprol" },
        { id: "seemember", title: "/seemember" },
        { id: "delmember", title: "/delmember" },
      ],
    },
    user: {
      title: "Comandos de Usuario",
      items: [
        { id: "joinrol", title: "/joinrol" },
        { id: "joingrouprol", title: "/joingrouprol" },
      ],
    },
  }

  return (
    <div className={styles.docsContainer}>
      <Navbar />

      <div className={styles.docsContent}>
        <DocsSidebar structure={docsStructure} activeSection={activeSection} setActiveSection={setActiveSection} />
        <DocsContent activeSection={activeSection} />
      </div>

      <Footer />
    </div>
  )
}
