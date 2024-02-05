import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const dialog = useRef();

  return createPortal(
    <dialog className="backdrop:bg-stone-900/90" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
