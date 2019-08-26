import React from "react";
import { storiesOf } from "@storybook/react";
import { Alert, Button } from "@viva-ui/ui";

storiesOf("Alert", module).add("Basic", () => <Alert>123</Alert>);
storiesOf("Button", module).add("Basic", () => <Button>123</Button>);
