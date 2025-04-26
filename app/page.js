import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FeatureSection from "../components/FeatureSection"
import { nombreBot } from "../config"

export default function Home() {
  const features = [
    {
      title: "Gestión de Roles Simplificada",
      description: "Genera contraseñas para que tus usuarios puedan adquirir un rol, sin necesidad de que estes.",
      image: "/img/feature1.jpg",
      imagePosition: "right",
    },
    {
      title: "Grupos de Roles Personalizables",
      description: "Crea grupos de roles para organizar mejor tu servidor y permite que otros usuarios puedan gestionar su propia comunidad dandoles ellos mismos un rol asignado.",
      image: "/img/feature2.jpg",
      imagePosition: "left",
    },
    {
      title: "Interfaz Amigable",
      description:
        "Comandos claros y respuestas detalladas para facilitar la gestión de roles para administradores y usuarios.",
      image: "/img/feature3.jpg",
      imagePosition: "right",
    },
  ]

  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{nombreBot} Bot</h1>
          <p className={styles.description}>
            La solución definitiva para gestionar roles en tu servidor de Discord. Simplifica la administración y
            permite a tus usuarios autoasignarse roles de forma segura.
          </p>
          <div className={styles.buttonContainer}>
            <a href="https://discord.com/oauth2/authorize?client_id=1364981410200424520&permissions=1099914300416&integration_type=0&scope=bot+applications.commands" target="_blank" className={styles.primaryButton}>
              Añadir a Discord
            </a>
            <Link href="/docs" className={styles.secondaryButton}>
              Documentación
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src="/img/bot-discord.jpg" alt="RoleManager Bot Logo" width={300} height={300} priority />
        </div>
      </section>

      <div className={styles.featuresContainer}>
        {features.map((feature, index) => (
          <FeatureSection
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            imagePosition={feature.imagePosition}
          />
        ))}
      </div>

      <Footer />
    </main>
  )
}
