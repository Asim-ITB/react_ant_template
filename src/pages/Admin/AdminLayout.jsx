import { Outlet } from "react-router-dom";
import "./Admin.css";
import adminContext from "./AdminContext";
import AdminNav from "./AdminNav";
import AdminNavTop from "./AdminNavTop";
import { Layout } from "antd";
import { useState } from "react";
import Footer from "../../components/Footer";
import useColorPickerStore from "../../stores/colorPickerStore";
export default function AdminLayout() {
  const { accentColor } = useColorPickerStore();
  const [collapsed, setCollapsed] = useState(false);
  const [breakpoint, setBreakpoint] = useState();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <adminContext.Provider
      value={{
        toggleCollapsed,
        breakpoint,
        setBreakpoint,
        collapsed,
        setCollapsed,
      }}
    >
      <div style={{ backgroundColor: accentColor }}>
        <Layout hasSider>
          <AdminNav />
          <Layout
            className="innerlayout"
            style={{
              backgroundColor: accentColor,
              marginLeft: !collapsed & !breakpoint ? "200px" : "0px",
              height: "100vh",
            }}
          >
            <div
              style={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <AdminNavTop />
              <div
                className="container outlet-height"
                style={
                  !breakpoint
                    ? { marginLeft: !collapsed ? "60px" : null }
                    : null
                }
              >
                <Outlet />
              </div>
              <div
                style={{
                  margin: !collapsed
                    ? "auto 30px 10px 60px"
                    : "auto 10px 10px 10px",
                }}
              >
                <Footer />
              </div>
            </div>
          </Layout>
        </Layout>
      </div>
    </adminContext.Provider>
  );
}
