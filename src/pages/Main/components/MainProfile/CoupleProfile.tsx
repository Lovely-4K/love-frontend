import { useMain, useProfile } from '../../hooks';
import Profile from './Profile';
import { IconHeart } from '~/assets/icons';

const CoupleProfile = () => {
  const { coupleProfile } = useMain();
  const { openDdayModal, dDay } = useProfile();

  return (
    <div className="flex h-full flex-col items-center justify-center gap-1">
      <div className="relative flex gap-2">
        <Profile
          name={coupleProfile.boyNickname}
          mbti={coupleProfile.boyMbti}
          src={coupleProfile.boyImageUrl}
          id={coupleProfile.boyId}
        />
        <IconHeart className="absolute left-1/2 top-1/3 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 fill-base-primary stroke-base-primary" />
        <Profile
          name={coupleProfile.girlNickname}
          mbti={coupleProfile.girlMbti}
          src={coupleProfile.girlImageUrl}
          id={coupleProfile.girlId}
        />
      </div>
      <span onClick={openDdayModal} className="text-2xl text-base-primary">
        D+{dDay}
      </span>
    </div>
  );
};

export default CoupleProfile;
