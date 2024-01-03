import { useProfile } from '../../hooks';
import MainDdayModal from '../MainDdayModal/MainDdayModal';
import MainProfileModal from '../MainProfileModal/MainProfileModal';
import { Button } from '~/components/common';
import { useGetCoupleProfile } from '~/services/couple';

const MainModalButtons = () => {
  const { data: coupleProfile } = useGetCoupleProfile();
  const { handleOpenProfileModal, openDdayModal } = useProfile();

  const coupleMode = coupleProfile.coupleStatus;

  return (
    <div className="flex items-center justify-end gap-3">
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
      {coupleMode === 'RELATIONSHIP' && (
        <>
          <Button
            onClick={openDdayModal}
            size="medium"
            className="hidden border border-grey-200 bg-base-white font-bold text-grey-400 md:block"
          >
            디데이 수정
          </Button>
          <MainDdayModal />
        </>
      )}
    </div>
  );
};

export default MainModalButtons;
