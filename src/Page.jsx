import React from "react";
import { useColorMode, useTheme } from "@chakra-ui/core";

function Page({ children }) {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const bgColor = {
    light: theme.colors.white,
    dark: theme.colors.gray["800"]
  };
  const color = { light: theme.colors.black, dark: theme.colors.white };
  const style = {
    background: bgColor[colorMode],
    color: color[colorMode]
  };
  return <div style={style}>{children}</div>;
}

export default Page;
