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
      // className="backdrop:bg-stone-900/90 bg-white border-[1px] border-slate-400/30 rounded-lg p-8 text-slate-500"
      className="backdrop:backdrop-blur-sm bg-white/20 border-[1px] border-slate-400/30 rounded-lg p-8 text-slate-300"
      ref={dialog}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
