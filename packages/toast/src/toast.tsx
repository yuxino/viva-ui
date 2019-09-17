import * as React from "react";

interface ToastProps {
  children?: any;
  type?: "nomarl" | "success" | "warning" | "error";
}

/** this is a cute button componet XD */
export default ({ children, type }: ToastProps) => {
  return <div className={`viva-ui-toast ${type}`}>{children}</div>;
};
