import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Dialog, openDialog, closeDialog } from "@viva-ui/ui";

storiesOf("Dialog", module).add("Basic", () => {
  const style = {
    body: {
      padding: 25
      // textAlign: "center"
    },
    p: {
      margin: 0,
      marginBottom: 15
    }
  };
  const body = (
    <div key="keyY" style={style.body}>
      <p style={style.p}>A personal markdown editor by Yuxino</p>
      <p style={style.p}>You can find me in follow way</p>
      <p style={style.p}>Github, Slack, Telgram etc ...</p>
      <div>version 1.0.0</div>
    </div>
  );
  return (
    <div>
      <Dialog title="viva editor" />
      <button onClick={() => openDialog(body)} style={{ marginRight: 15 }}>
        click me to show dialog
      </button>
      <button onClick={() => closeDialog()}>click me to hide dialog</button>
    </div>
  );
});
