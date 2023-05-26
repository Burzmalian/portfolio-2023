"use client";

import { SunIcon } from "@heroicons/react/24/solid";
import { Button } from "../Actions/Button";

const CardAction = () => {
  return (
    <Button
      aria-label="copy link"
      iconOnly
      size="sm"
      onClick={() => console.log("copy link")}
    >
      <SunIcon />
    </Button>
  );
};

export default CardAction;
