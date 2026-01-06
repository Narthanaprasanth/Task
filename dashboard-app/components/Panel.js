import React from "react"
import {
  FiFilter,
  FiDollarSign,
  FiCalendar,
  FiClipboard,
  FiChevronDown,
} from "react-icons/fi"
import { BsStars } from "react-icons/bs"

const Panel = ({ sale }) => {
  return (
    <div className="panel">

      {/* Toolbar */}
      <div className="toolbar">
        <div className="first1">
          <FiFilter className="filco-active" />
          <FiDollarSign className="filco" />
          <FiCalendar className="filco" />
          <FiClipboard className="filco" />
          <BsStars className="filco-svg" />
        </div>

        <div className="icon-circle">
          <FiChevronDown />
        </div>
      </div>

      <div className="next">
        <div className="preview">PREVIEW</div>
      </div>

      {/* Sale Details */}
      {!sale ? (
        <p style={{ padding: "16px", color: "#777" }}>
          Select a sale to see details
        </p>
      ) : (
        <div className="panel-content">
          <div className="com">
          <FiDollarSign className="filco-comp" />
          <h3 className="comp-name">{sale.name}</h3>
          </div>
          <p className="price">{sale.amount}EUR</p>
          <p><b className="sub">Company:</b><span className="sp">SuperCompany Ltd ASA</span> </p>
          <p><b className="sub">Contact:</b><span className="sp">Peter Elliot</span> </p>
          <p><b className="sub">Sale Date:</b><span className="sp1">{sale.saleDate}</span> </p>
          <p><b className="sub">Owner:</b> <span className="sp1">Eric Davies</span></p>
          <p><b className="sub">Sale Type:</b><span className="sp1">Cross Sale to Existing Customer</span> </p>
          <p><b className="sub">Status:</b><span className="sp1"> {sale.status}</span></p>
          
        </div>
      )}
      <div className="activities">
        <h3>Activities</h3>
        <p>04/11/2024 <span >Follow-up call</span></p>
        <p>01/11/2024 <span>Quote for Components</span></p>
        <p>23/09/2024  <span>Prospect meeting</span></p>
        <p>22/09/2024  <span>Indroduction Call</span></p>
      </div>
      <div className="stakeholders">
        <h3>Stakeholders</h3>
        <p>james Vargas</p>
        <p>Lisa jansson</p>
      </div>
    </div>
  )
}

export default Panel
