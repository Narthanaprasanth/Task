import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Company from "@/components/Company";
import Panel from "@/components/Panel";
import Tab from "@/components/Tab";

export default function RootLayout() {
  return (
    <html lang="en">
      <body >
        <div className="app-layout">
          <Sidebar/>
          <div className="div-area">
          <Topbar/>
          <div className="content-area">
            <div className="first">
              <Company/>
              <Tab/>
            </div>
            <div className="second">
              <Panel/>
            </div>
          </div>
          </div>
        </div>
      </body>
    </html>
  );
}
