import { useEffect } from 'react';
import EditContainer from './EditContainer';
import useModal from '~/hooks/useModal';

const MainEditModal = () => {
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
        <EditContainer />
      </Modal>
    </>
  );
};

export default MainEditModal;
