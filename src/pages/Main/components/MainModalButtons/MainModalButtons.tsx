import { useMain } from '../../hooks';
import { MainDdayModal } from '../MainDdayModal';
import { MainProfileModal } from '../MainProfileModal';

const MainModalButtons = () => {
  const {
    coupleMode,
    openProfileModal,
    closeProfileModal,
    profileModalRef,
    openDdayModal,
    closeDdayModal,
    dDayModalRef,
  } = useMain();

  return (
    <div className="flex items-center justify-end gap-3">
      <button
        onClick={openProfileModal}
        className="btn-small w-full rounded-xl border border-grey-200 bg-base-white font-bold text-grey-400 lg:btn-medium"
      >
        프로필 수정
      </button>
      <MainProfileModal ref={profileModalRef} closeModal={closeProfileModal} />
      {coupleMode && (
        <>
          <button
            onClick={openDdayModal}
            className="btn-small w-full rounded-xl border border-grey-200 bg-base-white font-bold text-grey-400 lg:btn-medium"
          >
            디데이 수정
          </button>
          <MainDdayModal ref={dDayModalRef} closeModal={closeDdayModal} />
        </>
      )}
    </div>
  );
};

export default MainModalButtons;
