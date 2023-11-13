import { useMain } from '../../hooks';
import Profile from './Profile';

const SoloProfile = () => {
  const { coupleProfile } = useMain();

  const { boyNickname, boyMbti, boyImageUrl, boyId } = coupleProfile;

  return (
    <div className="flex justify-center">
      <Profile name={boyNickname} mbti={boyMbti} src={boyImageUrl} id={boyId} />
    </div>
  );
};

export default SoloProfile;
