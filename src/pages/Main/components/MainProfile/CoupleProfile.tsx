import { useMain, useProfile } from '../../hooks';
import Profile from './Profile';
import { IconHeart } from '~/assets/icons';

const CoupleProfile = () => {
  const { coupleProfile } = useMain();
  const { openDdayModal, dDay } = useProfile();

  const {
    myNickname,
    opponentNickname,
    myMbti,
    opponentMbti,
    myImageUrl,
    opponentImageUrl,
    myBirthday,
    opponentBirthday,
    myCalendarColor,
    opponentCalendarColor,
    myId,
    opponentId,
  } = coupleProfile;

  return (
    <div className="flex flex-col items-center justify-center gap-1 pb-6 pt-8 md:py-5">
      <div className="relative flex gap-3 md:gap-5">
        <Profile
          nickname={myNickname}
          mbti={myMbti}
          imageUrl={myImageUrl}
          birthday={myBirthday}
          calendarColor={myCalendarColor}
          id={myId}
        />
        <div className="flex flex-col items-center justify-center">
          <IconHeart className="h-9 w-9 fill-base-primary stroke-base-primary md:h-12 md:w-12" />
          <span
            onClick={openDdayModal}
            className="text-base text-base-primary hover:cursor-pointer md:text-[1.5rem]"
          >
            {dDay}일째
          </span>
        </div>
        <Profile
          nickname={opponentNickname}
          mbti={opponentMbti}
          imageUrl={opponentImageUrl}
          birthday={opponentBirthday}
          calendarColor={opponentCalendarColor}
          id={opponentId}
        />
      </div>
    </div>
  );
};

export default CoupleProfile;
