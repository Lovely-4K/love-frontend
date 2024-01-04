import { useMainModal } from '../../hooks';
import ProfileContainer from './ProfileContainer';
import { Modal } from '~/components/domain';

const MainProfileModal = () => {
  const { closeProfileModal, profileModalRef } = useMainModal();

  return (
    <Modal className="p-0" ref={profileModalRef}>
      <button
        onClick={closeProfileModal}
        className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
      >
        ✕
      </button>
      <ProfileContainer />
    </Modal>
  );
};

export default MainProfileModal;
