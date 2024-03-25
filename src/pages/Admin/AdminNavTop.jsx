import { Col, Dropdown, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import LanguageSwitch from "../../components/LanguageSwitch";
export default function AdminNavTop() {
  const items = [
    {
      key: "profile",
      label: "Profile",
    },
    {
      key: "logOut",
      label: "Log Out",
    },
  ];
  const location = useLocation();
  const currentPath = location.pathname
    .substring(1)
    .split("/")
    .map((part) => part.toUpperCase())
    .join(" / ");
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    navigate("/login", { replace: true, state: { from: "admin/logout" } });
  }
  const onClick = ({ key }) => {
    if (key === "logOut") {
      logout();
    }
  };
  return (
    <Row
      align="middle"
      justify="space-between"
      style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
    >
      <Col hidden={false}>
        <span className="breadCrumb">{currentPath}</span>
      </Col>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        <LanguageSwitch />
        <Dropdown
          menu={{
            items,
            onClick,
          }}
          placement="topRight"
        >
          <UserOutlined
            style={{
              fontSize: "30px",
              marginRight: "10px",
              paddingLeft: "20px",
              color: "#1677ff",
            }}
          />
        </Dropdown>
      </Col>
    </Row>
  );
}
