import Image from "next/image"
import styles from "../styles/FeatureSection.module.css"

export default function FeatureSection({ title, description, image, imagePosition }) {
  return (
    <section className={`${styles.featureSection} ${styles[imagePosition]}`}>
      <div className={styles.featureContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.featureImage}>
        <Image src={image || "/placeholder.svg"} alt={title} width={400} height={300} />
      </div>
    </section>
  )
}
