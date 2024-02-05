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

  function closeModal(e) {
    if (dialog.current === e.target) {
      dialog.current.close();
    }
  }

  return createPortal(
    <dialog
      onClick={closeModal}
      className="backdrop:bg-stone-900/90"
      ref={dialog}
    >
      {children}
      <p
        className="fixed top-10 right-10 text-white text-[32px] cursor-pointer"
        onClick={() => dialog.current.close()}
      >
        X
      </p>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
