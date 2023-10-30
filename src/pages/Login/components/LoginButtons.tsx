const LoginButtonContainer = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center space-y-6 px-5">
        <button className="btn-extra-large w-full rounded-xl bg-brand-kakao text-base-black">
          카카오 계정으로 로그인
        </button>
        <button className="btn-extra-large w-full rounded-xl bg-brand-naver text-base-white">
          네이버 계정으로 로그인
        </button>
      </div>
    </>
  );
};

export default LoginButtonContainer;
