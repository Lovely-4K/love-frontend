import { useMain } from '../../hooks';
import Profile from './Profile';

const SoloProfile = () => {
  const { coupleProfile } = useMain();

  return (
    <div className="flex justify-center">
      <Profile
        name={coupleProfile.boyNickname}
        mbti={coupleProfile.boyMbti}
        src={coupleProfile.boyImageUrl}
        id={coupleProfile.boyId}
      />
    </div>
  );
};

export default SoloProfile;
