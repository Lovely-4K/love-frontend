import { IconHeart } from '~/assets/icons';
import { MainProfile } from '~/pages/Main/components';

const MainCoupleProfile = () => {
  return (
    <div className="relative flex gap-2">
      <MainProfile
        name="정"
        mbti="ISFJ"
        picture="https://source.unsplash.com/random/"
      />
      <IconHeart
        className={`absolute left-[8rem] top-[3rem] z-10  h-[3.1255rem] w-[3.125rem] fill-base-primary stroke-base-primary`}
      />
      <MainProfile
        name="호"
        mbti="ENTP"
        picture="https://source.unsplash.com/random/"
      />
    </div>
  );
};

export default MainCoupleProfile;
