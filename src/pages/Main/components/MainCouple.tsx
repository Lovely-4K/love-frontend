import { MainPreviews } from '~/pages/Main/components';
import MainCoupleProfile from '~/pages/Main/components/MainProfile/MainCoupleProfile';

const MainCouple = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="w-full min-w-[23.43rem] flex-shrink-0 p-5 lg:h-[30%] lg:max-h-[20rem]">
        <div className="mb-2 flex justify-end gap-[0.625rem]">
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
      </div>
      <div className="pt-5">
        <MainPreviews />
      </div>
    </div>
  );
};

export default MainCouple;
