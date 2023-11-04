import useGetCoupleProfile from '../../hooks/useGetCoupleProfile';
import { IconHeart } from '~/assets/icons';
import { MainProfile } from '~/pages/Main/components';

const MainCoupleProfile = () => {
  const { data, isLoading } = useGetCoupleProfile();

  if (!data || isLoading) return;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-1">
      <div className="relative flex gap-2">
        <MainProfile
          name={data.boyNickname}
          mbti={data.boyMbti}
          picture={data.boyImageUrl}
        />
        <IconHeart className="absolute left-1/2 top-1/3 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 fill-base-primary stroke-base-primary" />
        <MainProfile
          name={data.girlNickname}
          mbti={data.girlMbti}
          picture={data.girlImageUrl}
        />
      </div>
      <span className="text-3xl text-base-primary">D+123</span>
    </div>
  );
};

export default MainCoupleProfile;
