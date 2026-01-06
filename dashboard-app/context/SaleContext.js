"use client"
import { createContext, useContext, useState } from "react"

const SaleContext = createContext(null)

export function SaleProvider({ children }) {
  const [selectedSale, setSelectedSale] = useState(null)

  return (
    <SaleContext.Provider value={{ selectedSale, setSelectedSale }}>
      {children}
    </SaleContext.Provider>
  )
}

export function useSale() {
  return useContext(SaleContext)
}
