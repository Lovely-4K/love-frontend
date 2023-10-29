import { useEffect } from 'react';
import useModal from '~/hooks/useModal';

const IsNotCoupleModal = () => {
  const { openModal, closeModal, Modal } = useModal();

  useEffect(() => {
    openModal();
  }, [openModal]);

  return (
    <>
      <Modal className="flex flex-col items-center justify-center gap-16 py-10 pt-20">
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

export default IsNotCoupleModal;
