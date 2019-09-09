import { useState } from "react";
import Emitter from "../emitter";

class useModal {
  emitter = null;
  constructor() {
    this.emitter = new Emitter();
  }
  hook(value: boolean) {
    const [visiable, setVisiable] = useState(value);
    this.emitter.on("openModal", () => setVisiable(true));
    this.emitter.on("closeModal", () => setVisiable(false));
    return [visiable, setVisiable];
  }
  openModal = () => {
    this.emitter.emit("openModal");
  };
  closeModal = () => {
    this.emitter.emit("closeModal");
  };
}

export default useModal;
