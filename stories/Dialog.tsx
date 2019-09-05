import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Dialog, openDialog, closeDialog } from "../packages/ui";

storiesOf("Dialog", module).add("Basic", () => (
  <div>
    <Dialog />
    <button
      onClick={() =>
        openDialog(
          <div key="fuck" style={{ marginBottom: 15 }}>
            I am the mother fuck dialog
          </div>
        )
      }
      style={{ marginRight: 15 }}
    >
      click me to show dialog
    </button>
    <button onClick={() => closeDialog()}>click me to hide dialog</button>
  </div>
));
