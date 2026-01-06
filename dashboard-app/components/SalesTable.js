"use client"
import { useEffect, useState } from "react"
import { useSale } from "@/context/SaleContext"
import AddSaleModal from "./AddSaleModal"

export default function SalesTable() {
  const { setSelectedSale } = useSale()
  const [sales, setSales] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetchSales()
  }, [])

  async function fetchSales() {
    const res = await fetch("/api/sales")
    const data = await res.json()
    setSales(data)
  }

  async function deleteSale(id) {
    if (!confirm("Delete this sale?")) return
    await fetch(`/api/sales/${id}`, { method: "DELETE" })
    fetchSales()
  }

  return (
    <div className="main-table">
    <table>
       <thead>
          
          <tr className="table-header">
            <th><input type="checkbox" defaultChecked className="check" /></th>
            <th>Status</th>
             <th>Sale Date</th>
            <th>Amount</th>
            <th>Stage</th>
            <th>Next Activity</th>
            <th>Sale Name</th>
            
          </tr>
         </thead>
      <tbody>
        {sales.map((sale) => (
          <tr
            key={sale._id}
            onClick={() => setSelectedSale(sale)}
            className="table-body"
          >
            <th><input type="checkbox"></input></th>
             <td className={ sale.status === "Lost" ? "status-lost" : sale.status === "Sold" ? "status-sold" : sale.status === "Stalled" ? "status-stalled" : "" }>{sale.status}</td>
            <td>{sale.saleDate}</td>
            <td>{sale.amount}</td>
            <td>{sale.stage}</td>
             <td>{sale.nextActivity}</td>
            <td>{sale.name}</td>

            <td>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  deleteSale(sale._id)
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      
    </table>
    <div className="but">
     <button className="add" onClick={() => setOpen(true)}>+ Add</button>
      <button className="add">Filter</button>
       <button className="add">Export</button>
       <button className="add"></button>
</div>
       {open && (
         <AddSaleModal
           onClose={() => setOpen(false)}
           onAdded={fetchSales}
         />
       )}
    </div>
  )
}
