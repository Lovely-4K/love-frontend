import useModal from '~/hooks/useModal';
import {
  MainDdayModal,
  MainPreviews,
  MainProfileModal,
} from '~/pages/Main/components';
import MainCoupleProfile from '~/pages/Main/components/MainProfile/MainCoupleProfile';

const MainCouple = () => {
  const { closeModal, openModal, modalRef } = useModal();
  const {
    closeModal: closeDdayModal,
    openModal: openDdayModal,
    modalRef: dDayModalRef,
  } = useModal();

  return (
    <>
      <div className="flex items-center justify-end gap-3">
        <button
          onClick={openModal}
          className="btn-small w-full rounded-xl border border-grey-200 bg-base-white font-bold text-grey-400 lg:btn-medium"
        >
          프로필 수정
        </button>
        <MainProfileModal ref={modalRef} closeModal={closeModal} />
        <button
          onClick={openDdayModal}
          className="btn-small w-full rounded-xl border border-grey-200 bg-base-white font-bold text-grey-400 lg:btn-medium"
        >
          디데이 수정
        </button>
        <MainDdayModal ref={dDayModalRef} closeModal={closeDdayModal} />
      </div>
      <MainCoupleProfile />
      <MainPreviews />
    </>
  );
};

export default MainCouple;
