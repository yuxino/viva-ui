import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Alert } from "@viva-ui/ui";

storiesOf("Alert", module)
  .add("Basic", () => <Alert>123</Alert>)
  .add("Test II", () => <Alert>hello world</Alert>);
