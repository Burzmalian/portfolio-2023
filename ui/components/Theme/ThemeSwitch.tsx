"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Themes, useTheme } from "./Theme";
import { Button } from "../Actions/Button";

const ThemeSwitch = () => {
  const { changeTheme, currentTheme } = useTheme();
  const currentLight = currentTheme === Themes.light;

  const handleChangeTheme = () => {
    currentLight ? changeTheme(Themes.dark) : changeTheme(Themes.light);
  };

  return (
    <Button
      aria-label={`${currentTheme}`}
      onClick={handleChangeTheme}
      iconOnly
      size="md"
    >
      {currentTheme === Themes.light ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ThemeSwitch;
