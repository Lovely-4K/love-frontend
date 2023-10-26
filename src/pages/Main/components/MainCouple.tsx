import MainProfile from './MainProfile';
import { IconHeart } from '~/assets/icons';

const MainCouple = () => {
  return (
    <div className="min-w-[23.43rem] px-7 py-5">
      <div className="mb-5 flex justify-end gap-[0.625rem]">
        <button className="btn-small w-full rounded-xl border border-grey-200 bg-base-white font-bold text-grey-400 lg:btn-medium">
          프로필 수정
        </button>
        <button className="btn-small w-full rounded-xl border border-grey-200 bg-base-white font-bold text-grey-400 lg:btn-medium">
          디데이 수정
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
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
        <span className="text-3xl text-base-primary">D+123</span>
      </div>
    </div>
  );
};

export default MainCouple;
