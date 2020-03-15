import * as React from "react";
import { storiesOf } from "@storybook/react";
import { showToast } from "@viva-ui/ui";

storiesOf("Toast", module).add("Basic", () => {
  return (
    <>
      <button onClick={() => showToast({ children: "hello world" })}>
        nomarl
      </button>
      <button
        onClick={() => showToast({ children: "hello world", type: "success" })}
      >
        success
      </button>
      <button
        onClick={() => showToast({ children: "hello world", type: "warning" })}
      >
        warning
      </button>
    </>
  );
});
