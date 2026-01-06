"use client"
import { useState } from "react"
import SalesTabs from "@/components/SalesTabs"
import SalesTable from "@/components/SalesTable"

export default function DashboardPage() {
  const [tab, setTab] = useState("Sales")

  return (
    <>
      <SalesTabs onChange={setTab} />

      {tab === "Sales" && <SalesTable />}
      {tab === "Company" && <div>Company Details</div>}
      {tab === "Contacts" && <div>Contacts</div>}
      {tab === "Activities" && <div>Activities</div>}
      {tab === "Requests" && <div>Requests</div>}
    </>
  )
}
