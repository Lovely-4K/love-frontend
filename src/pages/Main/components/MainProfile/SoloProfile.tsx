import { useMain } from '../../hooks';
import Profile from './Profile';

const SoloProfile = () => {
  const { mainProfileData } = useMain();

  if (!mainProfileData) return;

  return (
    <div className="flex justify-center">
      <Profile
        name={mainProfileData.boyNickname}
        mbti={mainProfileData.boyMbti}
        src={mainProfileData.boyImageUrl}
      />
    </div>
  );
};

export default SoloProfile;
