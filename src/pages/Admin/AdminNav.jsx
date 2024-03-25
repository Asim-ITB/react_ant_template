import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { items } from "../../config/NavigationConfig";
import { Menu, Layout } from "antd";
import { useContext } from "react";
import adminContext from "./AdminContext";
import { useNavigate } from "react-router-dom";
import { APP_NAME } from "../../config/AppConfig";
import useColorPickerStore from "../../stores/colorPickerStore";
import useLangStore from "../../stores/langStore";
const { Sider } = Layout;
const App = () => {
  const { lang } = useLangStore();
  console.log(lang);
  const { collapsed, setCollapsed, setBreakpoint } = useContext(adminContext);
  const { primaryColor } = useColorPickerStore();
  const translateLabel = (labelKey) => {
    return lang[labelKey] !== undefined ? lang[labelKey] : labelKey;
  };
  const navigate = useNavigate();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const trigger = collapsed ? (
    <MenuUnfoldOutlined onClick={toggleCollapsed} />
  ) : (
    <MenuFoldOutlined onClick={toggleCollapsed} />
  );
  const currentPath = location.pathname
    .substring(1)
    .split("/")
    .map((part) => part);
  const translateMenuItems = (items) => {
    return items.map((item) => {
      const translatedItem = {
        ...item,
        label: translateLabel(item.label),
      };
      if (item.children) {
        translatedItem.children = translateMenuItems(item.children);
        if (translatedItem.children) {
          translatedItem.children = translatedItem.children.map(
            (childItem) => ({
              ...childItem,
              label: translateLabel(childItem.label),
            })
          );
        }
      }

      return translatedItem;
    });
  };
  return (
    <div>
      <Sider
        width={230}
        style={{
          height: "100vh",
          backgroundColor: primaryColor,
          backdropFilter: "blur(100px) brightness(100%)",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 100,
        }}
        breakpoint="lg"
        collapsedWidth="0"
        theme="light"
        trigger={trigger}
        onBreakpoint={(broken) => {
          setBreakpoint(broken);
        }}
        onCollapse={(collapsed) => {
          setCollapsed(collapsed);
        }}
        collapsible={true}
        collapsed={collapsed}
      >
        <div className="appHeadName">{APP_NAME}</div>
        <Menu
          defaultSelectedKeys={currentPath[1]}
          selectedKeys={currentPath[1]}
          style={{ background: "inherit", color: "inherit" }}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          items={translateMenuItems(items)}
          onClick={(e) => {
            navigate(`${e.keyPath[0]}`);
          }}
        />
      </Sider>
    </div>
  );
};
export default App;
