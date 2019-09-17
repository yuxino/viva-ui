import * as React from "react";
import { Dom } from "@viva-ui/shared";
import classNames from "classNames";

interface ToastProps {
  children?: any;
  type?: "nomarl" | "success" | "warning" | "error";
  delay?: number;
}

function Toast({ children, type }: ToastProps) {
  return <div className={classNames("viva-ui-toast", type)}>{children}</div>;
}

export function showToast(props: ToastProps) {
  const { delay = 1500 } = props;
  const node = Dom.addToGlobal(Toast, props);
  setTimeout(() => document.body.removeChild(node), delay);
}
