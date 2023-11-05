import useMain from '../../hooks/useMain';
import Profile from './Profile';
import { IconHeart } from '~/assets/icons';

const CoupleProfile = () => {
  const { mainProfileData, openDdayModal } = useMain();

  if (!mainProfileData) return;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-1">
      <div className="relative flex gap-2">
        <Profile
          name={mainProfileData.boyNickname}
          mbti={mainProfileData.boyMbti}
          src={mainProfileData.boyImageUrl}
        />
        <IconHeart className="absolute left-1/2 top-1/3 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 fill-base-primary stroke-base-primary" />
        <Profile
          name={mainProfileData.girlNickname}
          mbti={mainProfileData.girlMbti}
          src={mainProfileData.girlImageUrl}
        />
      </div>
      <span onClick={openDdayModal} className="text-3xl text-base-primary">
        D+123
      </span>
    </div>
  );
};

export default CoupleProfile;
