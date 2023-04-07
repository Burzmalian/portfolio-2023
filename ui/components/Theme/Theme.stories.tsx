// Button.stories.tsx
import * as React from "react";
import { Themes, useTheme } from "./Theme";
import { Button } from "../Actions/Button";

export default {
  title: "components/Theme",
};

export const Default = () => {
  const { changeTheme, currentTheme } = useTheme();
  return (
    <>
      <Button
        onClick={() =>
          changeTheme(currentTheme === Themes.dark ? Themes.light : Themes.dark)
        }
      >
        Switch Theme
      </Button>
      <div className="flex gap-4">
        <div
          data-testid="button"
          className="flex h-80 w-60 items-center justify-center gap-2 bg-bg-1"
        >
          <div className="h-20 w-20 border-2 border-border-1 bg-bg-2">text</div>
          <div className="h-20 w-20 bg-bg-3">text</div>
        </div>
      </div>
    </>
  );
};

// Palette story explaining theme
// Fonts
