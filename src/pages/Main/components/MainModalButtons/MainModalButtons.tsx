import { DdayModalProvider } from '../../contexts';
import { useMain, useProfile } from '../../hooks';
import MainDdayModal from '../MainDdayModal/MainDdayModal';
import MainProfileModal from '../MainProfileModal/MainProfileModal';
import { Button } from '~/components/common';

const MainModalButtons = () => {
  const { coupleMode, coupleProfile } = useMain();
  const { handleOpenProfileModal, openDdayModal } = useProfile();

  return (
    <div className="mt-5 flex items-center justify-end gap-3 md:mt-0">
      <Button
        onClick={() =>
          handleOpenProfileModal({
            birthday: coupleProfile.myBirthday,
            calendarColor: coupleProfile.myCalendarColor,
            id: coupleProfile.myId,
            imageUrl: coupleProfile.myImageUrl,
            mbti: coupleProfile.myMbti,
            nickname: coupleProfile.myNickname,
          })
        }
        size="medium"
        className="hidden border border-grey-200 bg-base-white font-bold text-grey-400 md:block"
      >
        프로필 수정
      </Button>
      <MainProfileModal />
      {coupleMode && (
        <>
          <Button
            onClick={openDdayModal}
            size="medium"
            className="hidden border border-grey-200 bg-base-white font-bold text-grey-400 md:block"
          >
            디데이 수정
          </Button>
          <DdayModalProvider>
            <MainDdayModal />
          </DdayModalProvider>
        </>
      )}
    </div>
  );
};

export default MainModalButtons;
