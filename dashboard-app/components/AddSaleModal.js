"use client"
import { useState } from "react"

export default function AddSaleModal({ onClose, onAdded }) {
  const [form, setForm] = useState({
    name: "",
    status: "Open",
    amount: "",
    stage: "10%",
    nextActivity: "",
    saleDate: "",
    owner: "",
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit() {
    await fetch("/api/sales", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    onAdded()
    onClose()
  }

  return (
    <div className="modal">
      <h3>Add Sale</h3>

      <input
        name="name"
        placeholder="Sale Name"
        value={form.name}
        onChange={handleChange}
      />

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        <option>Open</option>
        <option>Sold</option>
        <option>Lost</option>
        <option>Stalled</option>
      </select>

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
      />
<label>Stage</label>
      <input
        name="stage"
        placeholder="Stage"
        value={form.stage}
        onChange={handleChange}
      />
<label>Sale Date</label>
      <input
        type="date"
        name="saleDate"
        value={form.saleDate}
        onChange={handleChange}
        
      />

<label>Next Activity</label>
      <input
        type="date"
        name="nextActivity"
        value={form.nextActivity}
        onChange={handleChange}
        placeholder="next activity"
      />


      <button onClick={handleSubmit}>SUBMIT</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  )
}
