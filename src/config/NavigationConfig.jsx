import { DashboardOutlined, SettingOutlined } from "@ant-design/icons";
import { BsBook } from "react-icons/bs";
import { PiTableDuotone } from "react-icons/pi";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
export const items = [
  getItem("sidenav.dashboard", "dashboard", <DashboardOutlined />),
  getItem("sidenav.school", "school", <BsBook />, [
    getItem("sidenav.schoolEntry", "school-entry"),
    getItem("sidenav.schoolLists", "school-list"),
  ]),
  getItem("sidenav.test", "test", <SettingOutlined />),
  getItem("sidenav.dynamicForm", "dynamicForm", <SettingOutlined />),
  getItem("sidenav.questionTable", "formTable", <PiTableDuotone size={16} />),
  getItem("sidenav.formAdder", "formAdder", <SettingOutlined />),
  getItem("sidenav.familyForm", "familyForm", <DashboardOutlined />),
];
