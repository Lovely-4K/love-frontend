import { useEffect } from 'react';
import { Modal } from '../Modal';
import useModal from '~/hooks/useModal';

const NotCoupleModal = () => {
  const { openModal, closeModal, modalRef } = useModal();

  useEffect(() => {
    openModal();
  }, [openModal]);

  return (
    <>
      <Modal
        ref={modalRef}
        className="flex flex-col items-center justify-center gap-16 py-10 pt-20"
      >
        <span className="font-title text-base-black">
          앗! 커플 등록이 필요한 페이지에요!
        </span>
        <button
          onClick={closeModal}
          className="btn-large btn w-full rounded-xl border bg-base-primary text-base-white focus:outline-none"
        >
          아 알겠다고요;
        </button>
      </Modal>
    </>
  );
};

export default NotCoupleModal;
