import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Alert } from "../packages/ui";

storiesOf("Alert", module).add("Basic", () => <Alert>123</Alert>);
