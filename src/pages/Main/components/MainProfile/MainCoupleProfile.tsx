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
      <IconHeart className="absolute left-1/2 top-1/2 z-10 h-[3.1255rem] w-[3.125rem] -translate-x-1/2 -translate-y-1/2 fill-base-primary stroke-base-primary lg:left-32 lg:top-12 lg:translate-x-0 lg:translate-y-0" />
      <MainProfile
        name="호"
        mbti="ENTP"
        picture="https://source.unsplash.com/random/"
      />
    </div>
  );
};

export default MainCoupleProfile;
