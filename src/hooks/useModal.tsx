import { useCallback, useRef } from 'react';

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

  return {
    openModal,
    closeModal,
    modalRef,
  };
};

export default useModal;
