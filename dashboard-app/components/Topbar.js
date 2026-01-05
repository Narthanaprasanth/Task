import { FiSearch, FiChevronDown, FiBell, FiUser, FiMenu, FiHelpCircle } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import { LuPanelLeft } from "react-icons/lu";


export default function Topbar() {
  return (
    <header className="topbar">

      {/* LEFT */}
      <div className="topbar-left">
        <button className="new-btn">
          <BsBuilding />
          <span>New</span>
          <FiChevronDown />
        </button>

        <div className="circle-icon">
          <FiSearch />
        </div>
      </div>

      {/* CENTER */}
      <div className="topbar-center">
        <FiSearch className="search-icon" />
        <input placeholder="Search for anything" />
      </div>

      {/* RIGHT */}
      <div className="topbar-right">
        <div className="notification">
          <FiBell />
          <span className="badge">3</span>
        </div>

        <FiUser className="icon-right" />
        <FiMenu className="icon-right" />
        <span className="help">Help
        </span>
        <div><LuPanelLeft/></div>
      </div>

    </header>
  );
}
