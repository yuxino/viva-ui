import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Toast } from "@viva-ui/ui";

storiesOf("Toast", module).add("Basic", () => (
  <>
    <Toast type="nomarl">The Evil Rabbit jumped over the fence</Toast>
    <Toast type="success">The Evil Rabbit jumped over the fence</Toast>
    <Toast type="warning">The Evil Rabbit jumped over the fence</Toast>
    <Toast type="error">The Evil Rabbit jumped over the fence</Toast>
  </>
));
