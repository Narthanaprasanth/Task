"use client"
import { useState } from "react"

export default function SalesTabs({ onChange }) {
  const tabs = ["Activities", "Contacts", "Projects", "Sales", "Requests"]
  const [active, setActive] = useState("Sales")

  const handleClick = (tab) => {
    setActive(tab)

    if (typeof onChange === "function") {
      onChange(tab)
    }
  }

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab}
          className={active === tab ? "active" : ""}
          onClick={() => handleClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
