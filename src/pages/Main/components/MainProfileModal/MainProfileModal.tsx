import { useEffect } from 'react';
import ProfileContainer from './ProfileContainer';
import useModal from '~/hooks/useModal';

const MainProfileModal = () => {
  const { openModal, closeModal, Modal } = useModal();

  useEffect(() => {
    openModal();
  }, [openModal]);

  return (
    <>
      <button className="btn" onClick={openModal}>
        open modal
      </button>
      <Modal className="p-0">
        <button
          onClick={closeModal}
          className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
        >
          ✕
        </button>
        <div className="h-36 bg-personal-blue" />
        <ProfileContainer />
      </Modal>
    </>
  );
};

export default MainProfileModal;
