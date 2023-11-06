import { forwardRef } from 'react';
import { ProfileModalProvider } from '../../context/ProfileModalContext';
import ProfileContainer from './ProfileContainer';
import { Modal } from '~/components/domain';

interface MainProfileModalProps {
  closeModal: () => void;
}

const MainProfileModal = forwardRef<HTMLDialogElement, MainProfileModalProps>(
  ({ closeModal }, ref) => {
    return (
      <Modal className="p-0" ref={ref}>
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
    );
  },
);

export default MainProfileModal;
