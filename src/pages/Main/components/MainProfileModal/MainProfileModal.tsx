import { ProfileModalProvider } from '../../contexts/ProfileModalContext';
import { useProfile } from '../../hooks';
import ProfileContainer from './ProfileContainer';
import { Modal } from '~/components/domain';

const MainProfileModal = () => {
  const { closeProfileModal, profileModalRef } = useProfile();

  return (
    <Modal className="p-0" ref={profileModalRef}>
      <ProfileModalProvider>
        <button
          onClick={closeProfileModal}
          className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
        >
          ✕
        </button>
        <ProfileContainer />
      </ProfileModalProvider>
    </Modal>
  );
};

export default MainProfileModal;
