import { useMain } from '../../hooks';
import { MainDdayModal } from '../MainDdayModal';
import { MainProfileModal } from '../MainProfileModal';
import { Button } from '~/components/common';

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
      <Button
        onClick={openProfileModal}
        size="medium"
        className="border border-grey-200 bg-base-white font-bold text-grey-400"
      >
        프로필 수정
      </Button>
      <MainProfileModal ref={profileModalRef} closeModal={closeProfileModal} />
      {coupleMode && (
        <>
          <Button
            onClick={openDdayModal}
            size="medium"
            className="border border-grey-200 bg-base-white font-bold text-grey-400"
          >
            디데이 수정
          </Button>
          <MainDdayModal ref={dDayModalRef} closeModal={closeDdayModal} />
        </>
      )}
    </div>
  );
};

export default MainModalButtons;
