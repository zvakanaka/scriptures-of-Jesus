import React from "react";

import { IconButton, useColorMode } from "@chakra-ui/core";

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? "moon" : "sun"}
        variantColor="blue"
        aria-label={`Change to ${
          colorMode === "light" ? "dark" : "light"
        } mode`}
      />
    </header>
  );
}

export default ColorModeToggle;
