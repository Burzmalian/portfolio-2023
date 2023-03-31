// Button.stories.tsx
import * as React from "react";

export default {
  title: "Theme",
};

export const Default = () => (
  <div className="flex gap-4">
    <div className="dark">
      <div
        data-testid="button"
        className="flex h-80 w-60 items-center justify-center gap-2 bg-bg-1"
      >
        <div className="h-20 w-20 border-2 border-border-1 bg-bg-2">
          <div className="light">
            <div className="bg-bg-2">text</div>
          </div>
        </div>
        <div className="h-20 w-20 bg-bg-3">text</div>
      </div>
    </div>
    <div className="light">
      <div
        data-testid="button"
        className="flex h-80 w-60 items-center justify-center gap-2 bg-bg-1"
      >
        <div className="h-20 w-20 border-2 border-border-1 bg-bg-2">
          <div className="dark">
            <div className="bg-bg-3">text</div>
          </div>
        </div>
        <div className="h-20 w-20 bg-bg-3">text</div>
      </div>
    </div>
  </div>
);

// Palette story explaining theme
// Fonts
