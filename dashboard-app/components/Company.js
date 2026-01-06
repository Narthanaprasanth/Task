import { FiStar, FiEdit2, FiMoreVertical } from "react-icons/fi";

export default function Company() {
  return (
    <div className="company-card">
      {/* Top Header */}
      <div className="company-header">
        <div className="company-left">
          <div className="company-logo">🏢</div>
          <div className="company-name">
            <h2>SuperCompany Ltd ASA <FiStar className="star" /></h2>
            <p className="sub-text">Department Stockholm</p>
          </div>
        </div>

        <div className="company-actions">
          <div className="edit">
            <FiEdit2 className="move" />
          </div>
          <div><FiMoreVertical /></div>
          
        </div>
      </div>

      {/* Tabs */}
      <div className="company-tabs">
        <span className="tab active">Company</span>
        <span className="tab">More</span>
        <span className="tab">Interest</span>
        <span className="tab">Note</span>
        <span className="tab">Market data</span>
        <span className="tab">Misc</span>
      </div>

      {/* Details */}
      <div className="company-details">
        <div className="details-col">
          <p ><strong>Postal:</strong> <span> Västögtagatan 5, 102 61 Stockholm</span>  </p>
          <p><strong>Country:</strong>    Sweden</p>
          <p><strong>Phone:</strong>  <span>+46 800 193 2820</span> Main   </p>
          <p><strong>Webaddress:</strong> <span>info@sc.se</span></p>
          <p><strong>E-mail:</strong> <span>www.sc.se</span> </p>
        </div>

        <div className="details-col">
          <p><strong>Category:</strong> Customer A</p>
          <p><strong>Code:</strong> SUPERCO</p>
          <p><strong>Number:</strong> 2002</p>
          <p><strong>VAT No.:</strong> SE123456789</p>
          <p><strong>Business:</strong> IT</p>
        </div>
      </div>

      {/* Footer */}
      <div className="company-footer">
        <div>
          <input type="checkbox" /> Stop
          <input type="checkbox" /> No mailings
        </div>
        <p>Updated: 18/09/2023 OG</p>
      </div>
    </div>
  );
}
