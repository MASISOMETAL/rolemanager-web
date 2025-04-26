"use client"

import { useState } from "react"
import styles from "../styles/DocsSidebar.module.css"

export default function DocsSidebar({ structure, activeSection, setActiveSection }) {
  const [expandedSections, setExpandedSections] = useState({
    welcome: true,
    admin: false,
    master: false,
    user: false,
  })

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  const handleItemClick = (itemId) => {
    setActiveSection(itemId)
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        {Object.keys(structure).map((sectionKey) => {
          const section = structure[sectionKey]
          return (
            <div key={sectionKey} className={styles.sidebarSection}>
              <button className={styles.sectionTitle} onClick={() => toggleSection(sectionKey)}>
                <span>{section.title}</span>
                <span className={styles.arrow}>{expandedSections[sectionKey] ? "▼" : "▶"}</span>
              </button>

              {expandedSections[sectionKey] && (
                <ul className={styles.sectionItems}>
                  {section.items.map((item) => (
                    <li
                      key={item.id}
                      className={`${styles.sectionItem} ${activeSection === item.id ? styles.active : ""}`}
                      onClick={() => handleItemClick(item.id)}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
