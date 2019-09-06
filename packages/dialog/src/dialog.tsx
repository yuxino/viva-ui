import * as React from "react";
import { useState } from "react";
import { Emitter } from "@viva-ui/shared";

const emitter = new Emitter();

const Dialog = () => {
  const [visiable, setVisiable] = useState(false);
  const [comp, setComp] = useState(null);
  emitter.on("openDialog", component => {
    const Component =
      typeof component === "function" ? component : () => component;
    setVisiable(true);
    setComp(<Component />);
  });
  emitter.on("closeDialog", () => setVisiable(false));
  return visiable ? <div className="div">{comp}</div> : null;
};

const openDialog = component => emitter.emit("openDialog", component);
const closeDialog = () => emitter.emit("closeDialog");

export { openDialog, closeDialog };
export default Dialog;
