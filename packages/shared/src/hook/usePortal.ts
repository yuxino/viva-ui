import * as React from "react";
import { useEffect } from "react";

function usePortal(target) {
  const rootElemRef = React.useRef(document.createElement("div"));

  useEffect(function setupElement() {
    target.appendChild(rootElemRef.current);
    return function removeElement() {
      rootElemRef.current.remove();
    };
  }, []);

  return rootElemRef.current;
}

export default usePortal;
