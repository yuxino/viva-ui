import * as React from "react";
import { useState, useRef, useEffect } from "react";
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

  const ref = useRef();

  useEffect(() => {
    if (ref) {
      const event = e => {
        const clickNoInCurrent = !ref.current.contains(e.target);
        visiable && clickNoInCurrent && closeDialog();
      };
      document.addEventListener("click", event);
      return () => document.removeEventListener("click", event);
    }
  }, [visiable, ref]);

  return (
    visiable && (
      <div className="viva-ui-dialog" ref={ref}>
        <div className="viva-ui-dialog_box">
          <div className="viva-ui-dialog_title">{title}</div>
          <div>{component}</div>
        </div>
      </div>
    )
  );
};

export { openDialog, closeDialog };
export default Dialog;
