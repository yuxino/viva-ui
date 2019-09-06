import * as React from "react";
import { useState } from "react";
import { Emitter } from "@viva-ui/shared";

interface DialogProps {
  title: String;
}

const emitter = new Emitter();

const useDialog = (v = false) => {
  const [visiable, setVisiable] = useState(v);
  const [component, setComp] = useState(null);
  emitter.on("openDialog", component => {
    const Component =
      typeof component === "function" ? component : () => component;
    setVisiable(true);
    setComp(<Component />);
  });
  emitter.on("closeDialog", () => setVisiable(false));
  return [visiable, component];
};

const openDialog = component => emitter.emit("openDialog", component);
const closeDialog = () => emitter.emit("closeDialog");

const Dialog = ({ title }: DialogProps) => {
  const [visiable, component] = useDialog();

  return (
    visiable && (
      <div className="viva-ui-dialog">
        <div className="viva-ui-dialog_box">
          <div className="viva-ui-dialog_close"></div>
          <div className="viva-ui-dialog_title">{title}</div>
          <div>{component}</div>
        </div>
      </div>
    )
  );
};

export { openDialog, closeDialog };
export default Dialog;
