import { PropsWithChildren, memo, useCallback, useRef } from 'react';

interface ModalProps extends PropsWithChildren {
  className?: string;
}

const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = useCallback(() => {
    if (!modalRef.current) return;

    modalRef.current.showModal();
  }, []);

  const closeModal = useCallback(() => {
    if (!modalRef.current) return;

    modalRef.current.close();
  }, []);

  const Modal = memo(({ children, className }: ModalProps) => {
    return (
      <dialog ref={modalRef} className="modal">
        <div className={`modal-box ${className}`}>{children}</div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    );
  });

  return { openModal, closeModal, Modal } as const;
};

export default useModal;
