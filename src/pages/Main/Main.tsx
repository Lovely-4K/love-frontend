import { IconHeart } from '~/assets/icons';

const MainPage = () => {
  return (
    <>
      <div className="mb-5 flex justify-end gap-[0.625rem]">
        <button className="btn-medium rounded-xl border border-grey-200 bg-base-white font-bold text-grey-400">
          프로필 수정
        </button>
        <button className="btn-medium rounded-xl border border-grey-200 bg-base-white font-bold text-grey-400">
          디데이 수정
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="relative flex gap-2">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="avatar">
              <div className="avatar-extra-large rounded-full">
                <img src="https://source.unsplash.com/random/" />
              </div>
            </div>
            <span className="font-title font-bold">정</span>
            <span className="font-medium text-grey-500">ISFJ</span>
          </div>
          <IconHeart
            className={`absolute left-[8rem] top-[3rem] z-10  h-[3.1255rem] w-[3.125rem] fill-base-primary stroke-base-primary`}
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="avatar">
              <div className="avatar-extra-large rounded-full">
                <img src="https://source.unsplash.com/random/" />
              </div>
            </div>
            <span className="font-title font-bold">정</span>
            <span className="font-medium text-grey-500">ISFJ</span>
          </div>
        </div>
        <span className="text-3xl text-base-primary">D+123</span>
      </div>
    </>
  );
};

export default MainPage;
