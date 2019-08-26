import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../packages/ui";

storiesOf("Button", module).add("Basic", () => (
  <Button name="fuck u">123</Button>
));
