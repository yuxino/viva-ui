import * as React from "react";
import ReactDOM from "react-dom";
import { storiesOf } from "@storybook/react";
import { Hook } from "@viva-ui/shared";

const { usePortal, useModal } = Hook;

class Modal {
  modal = new useModal();
  openModal = this.modal.openModal;
  closeModal = this.modal.closeModal;

  static getInstance() {
    return new Modal();
  }

  Component = ({ children }: any) => {
    const [visiable] = this.modal.hook(false);
    const target = usePortal(document.body);
    return ReactDOM.createPortal(visiable && children, target);
  };
}

storiesOf("Modal", module).add("Basic", () => {
  const ModalInstance = Modal.getInstance();
  const ModalOne = ModalInstance.Component;
  const ModalInstanceTwo = Modal.getInstance();
  const ModalTwo = ModalInstanceTwo.Component;

  return (
    <div>
      <button onClick={ModalInstance.openModal}>click me to show modal</button>
      <button onClick={ModalInstance.closeModal}>click me to hide modal</button>
      <ModalOne>
        <div>hello world1</div>
      </ModalOne>

      <button onClick={ModalInstanceTwo.openModal}>
        click me to show modal
      </button>
      <button onClick={ModalInstanceTwo.closeModal}>
        click me to hide modal
      </button>
      <ModalTwo>
        <div>hello world2</div>
      </ModalTwo>
    </div>
  );
});
