import { useMain } from '../../hooks';
import Profile from './Profile';

const SoloProfile = () => {
  const { coupleProfile } = useMain();

  const { myNickname, myMbti, myImageUrl, myBirthday, myCalendarColor, myId } =
    coupleProfile;

  return (
    <div className="flex justify-center">
      <Profile
        nickname={myNickname}
        mbti={myMbti}
        imageUrl={myImageUrl}
        birthday={myBirthday}
        calendarColor={myCalendarColor}
        id={myId}
      />
    </div>
  );
};

export default SoloProfile;
