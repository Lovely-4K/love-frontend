import { useEffect } from 'react';
import { ProfileModalProvider } from '../../context/ProfileModalContext';
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
        <ProfileModalProvider>
          <button
            onClick={closeModal}
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
          >
            ✕
          </button>
          <ProfileContainer />
        </ProfileModalProvider>
      </Modal>
    </>
  );
};

export default MainProfileModal;
