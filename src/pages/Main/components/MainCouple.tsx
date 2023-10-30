import { MainPreviews } from '~/pages/Main/components';
import MainCoupleProfile from '~/pages/Main/components/MainProfile/MainCoupleProfile';

const MainCouple = () => {
  return (
    <div className="flex h-full w-full flex-col p-5">
      <div className="flex items-center justify-end gap-[0.625rem]">
        <button className="btn-small w-full rounded-xl border border-grey-200 bg-base-white font-bold text-grey-400 lg:btn-medium">
          프로필 수정
        </button>
        <button className="btn-small w-full rounded-xl border border-grey-200 bg-base-white font-bold text-grey-400 lg:btn-medium">
          디데이 수정
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <MainCoupleProfile />
        <span className="text-3xl text-base-primary">D+123</span>
      </div>
      <MainPreviews />
    </div>
  );
};

export default MainCouple;
