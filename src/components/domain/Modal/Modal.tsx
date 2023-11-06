import { PropsWithChildren, forwardRef, memo } from 'react';

interface ModalProps extends PropsWithChildren {
  className?: string;
}
const Modal = memo(
  forwardRef<HTMLDialogElement, ModalProps>(({ children, className }, ref) => {
    return (
      <dialog ref={ref} className="modal">
        <div className={`modal-box ${className}`}>{children}</div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    );
  }),
);

export default Modal;
