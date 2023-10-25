const LoginContainer = () => {
  return (
    <div className="flex w-[28rem] flex-col justify-center gap-12 rounded-xl border-solid border-grey-100 bg-base-white px-8 lg:h-[30rem] lg:border-[1px]">
      <h2 className="font-title w-80 break-keep pl-1 leading-5 lg:w-full">
        다이어리를 작성해서 우리의 장소를 추억으로 남겨보세요.
      </h2>
      <div className="space-y-6">
        <button className="btn-extra-large rounded-xl bg-brand-kakao text-base-black">
          카카오 계정으로 로그인
        </button>
        <button className="btn-extra-large rounded-xl bg-brand-naver text-base-white">
          네이버 계정으로 로그인
        </button>
      </div>
    </div>
  );
};

export default LoginContainer;
