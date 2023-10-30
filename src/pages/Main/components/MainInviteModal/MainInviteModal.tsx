import { useEffect } from 'react';
import InviterProfile from './InviterProfile';
import useModal from '~/hooks/useModal';

interface MainInviteModalProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const MainInviteModal = ({ onClick }: MainInviteModalProps) => {
  const { openModal, closeModal, Modal } = useModal();

  useEffect(() => {
    openModal();
  }, [openModal]);

  return (
    <>
      <Modal className="flex flex-col gap-10 py-10">
        <InviterProfile />
        <div className="flex justify-center gap-2">
          <button
            onClick={closeModal}
            className="btn-medium btn w-full rounded-xl border-grey-300 bg-base-white text-grey-400 focus:outline-none"
          >
            취소
          </button>
          <button
            onClick={onClick}
            className="btn-medium btn w-full rounded-xl border bg-base-primary text-base-white focus:outline-none"
          >
            수락하기
          </button>
        </div>
      </Modal>
    </>
  );
};

export default MainInviteModal;
