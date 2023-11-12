import { Button } from '~/components/common';

const LoginButtonContainer = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center space-y-6 px-5">
        <Button size="extra-large" className="bg-brand-kakao text-base-black">
          카카오 계정으로 로그인
        </Button>
        <Button size="extra-large" className="bg-brand-naver text-base-white">
          네이버 계정으로 로그인
        </Button>
      </div>
    </>
  );
};

export default LoginButtonContainer;
