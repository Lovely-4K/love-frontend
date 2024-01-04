import { PropsWithChildren, forwardRef, memo } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps extends PropsWithChildren {
  className?: string;
}

const Modal = memo(
  forwardRef<HTMLDialogElement, ModalProps>(({ children, className }, ref) => {
    const modalPortalEl = document.getElementById('modal');

    if (!modalPortalEl) throw new Error('modal portal element not found');

    return createPortal(
      <dialog ref={ref} className="modal">
        <div className={`modal-box ${className}`}>{children}</div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>,
      modalPortalEl,
    );
  }),
);

export default Modal;
