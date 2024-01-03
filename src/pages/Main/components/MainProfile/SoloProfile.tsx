import Profile from './Profile';
import { useGetCoupleProfile } from '~/services/couple';

const SoloProfile = () => {
  const { data: coupleProfile } = useGetCoupleProfile();

  const { myNickname, myMbti, myImageUrl, myBirthday, myCalendarColor, myId } =
    coupleProfile;

  return (
    <div className="flex h-1/2 justify-center">
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
