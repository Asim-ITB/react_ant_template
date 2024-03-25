import { Dropdown } from "antd";
import useLangStore from "../stores/langStore";
import { GlobalOutlined } from "@ant-design/icons";

const items = [
  {
    key: "en",
    label: "English",
  },
  {
    key: "nep",
    label: "Nepali",
  },
];
export default function LanguageSwitch() {
  const { setLang } = useLangStore();
  const onClick = (value) => {
    setLang(value.key);
  };
  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
      placement="topRight"
      trigger="hover"
    >
      <GlobalOutlined
        style={{
          fontSize: "30px",
          marginRight: "10px",
          color: "#ff4d4f",
        }}
      />
    </Dropdown>
  );
}
