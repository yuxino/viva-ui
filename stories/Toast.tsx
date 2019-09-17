import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Toast } from "@viva-ui/ui";

storiesOf("Toast", module).add("Basic", () => <Toast name="123">123</Toast>);
