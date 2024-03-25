import { Button, ColorPicker, Space } from "antd";
import useColorPickerStore from "../stores/colorPickerStore";
import Cookies from "js-cookie";

export default function Colorpicker() {
  const {
    primaryColor,
    secondaryColor,
    accentColor,
    setPrimaryColor,
    setSecondaryColor,
    setAccentColor,
  } = useColorPickerStore();

  const defaultPrimary = "rgba(158,167,179, 0.6)";
  const defaultSecondary = "rgba(158,167,179, 0.3)";
  const defaultAccent = "rgba(158,167,179, 0.1)";

  const colorChangePrimary = (value) => {
    const r = Math.round(value.metaColor.r);
    const g = Math.round(value.metaColor.g);
    const b = Math.round(value.metaColor.b);
    const a = value.metaColor.a;

    setPrimaryColor(`rgba(${r},${g},${b},${a})`);
  };

  const colorChangeSecondary = (value) => {
    const r = Math.round(value.metaColor.r);
    const g = Math.round(value.metaColor.g);
    const b = Math.round(value.metaColor.b);
    const a = value.metaColor.a;
    setSecondaryColor(`rgba(${r},${g},${b},${a})`);
  };

  const colorChangeAccent = (value) => {
    const r = Math.round(value.metaColor.r);
    const g = Math.round(value.metaColor.g);
    const b = Math.round(value.metaColor.b);
    const a = value.metaColor.a;
    setAccentColor(`rgba(${r},${g},${b},${a})`);
  };

  const setCookies = () => {
    Cookies.set("primary", primaryColor);
    Cookies.set("secondary", secondaryColor);
    Cookies.set("accent", accentColor);
  };

  const handleStateChange = () => {
    setCookies();
  };

  const unsetCookies = () => {
    Cookies.remove("primary");
    Cookies.remove("secondary");
    Cookies.remove("accent");
    setPrimaryColor(defaultPrimary);
    setSecondaryColor(defaultSecondary);
    setAccentColor(defaultAccent);
  };

  return (
    <Space wrap={true}>
      Primary:
      <ColorPicker
        size="large"
        value={primaryColor}
        onChange={(value) => {
          colorChangePrimary(value);
        }}
        showText
      />
      Secondary:
      <ColorPicker
        size="large"
        value={secondaryColor}
        onChange={(value) => {
          colorChangeSecondary(value);
        }}
        showText
      />
      Accent:
      <ColorPicker
        size="large"
        value={accentColor}
        onChange={(value) => {
          colorChangeAccent(value);
        }}
        showText
      />
      <Button onClick={handleStateChange}>Save Data</Button>
      <Button onClick={unsetCookies}>Change to default</Button>
    </Space>
  );
}
