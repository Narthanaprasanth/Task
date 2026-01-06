"use client"

import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"
import Company from "@/components/Company"
import Panel from "@/components/Panel"
import { SaleProvider, useSale } from "@/context/SaleContext"
import "./globals.css"

function LayoutContent({ children }) {
  const { selectedSale } = useSale()

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="div-area">
        <Topbar />

        <div className="content-area">
          <div className="first">
            <Company />
            {children}
          </div>

          <div className="second">
            <Panel sale={selectedSale} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SaleProvider>
          <LayoutContent>{children}</LayoutContent>
        </SaleProvider>
      </body>
    </html>
  )
}
