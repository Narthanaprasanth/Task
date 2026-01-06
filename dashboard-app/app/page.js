"use client"
import { useState } from "react"
import SalesTabs from "@/components/SalesTabs"
import SalesTable from "@/components/SalesTable"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Sales")
  const [selectedSale, setSelectedSale] = useState(null)

  return (
    <div>
      
      <SalesTabs onChange={setActiveTab} />

      {/* Content changes based on tab */}
      {activeTab === "Sales" && (
        <SalesTable setSelectedSale={setSelectedSale} />
      )}

      {activeTab === "Activities" && <div>Activities content</div>}
      {activeTab === "Contacts" && <div>Contacts content</div>}
      {activeTab === "Projects" && <div>Projects content</div>}
      {activeTab === "Requests" && <div>Requests content</div>}
    </div>
  )
}
