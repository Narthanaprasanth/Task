import {
  BsSpeedometer2,
  BsBuilding,
  BsBarChartLine,
} from "react-icons/bs";
import {
  FiUser,
  FiCalendar,
  FiDollarSign,
  FiClipboard,
  FiMap,
  FiPackage,
  FiAtSign,
  FiTarget,
  FiChevronRight,
} from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">L</div>

      <BsSpeedometer2 className="icon" />
      <BsBuilding className="icon active" />
      <FiUser className="icon" />
      <FiCalendar className="icon" />
      <FiDollarSign className="icon" />
      <FiClipboard className="icon" />
      <FiMap className="icon" />
      <FiPackage className="icon" />
      <FiAtSign className="icon" />
      <BsBarChartLine className="icon" />
      <FiTarget className="icon" />

      <FiChevronRight className="icon bottom" />
    </aside>
  );
}
