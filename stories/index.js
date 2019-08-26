import React from "react";
import { storiesOf } from "@storybook/react";
import Button, { LightButton } from "../packages/button";

storiesOf("Button", module)
  .add("Basic", () => <Button>123</Button>)
  .add("LightButton", () => <LightButton></LightButton>);
