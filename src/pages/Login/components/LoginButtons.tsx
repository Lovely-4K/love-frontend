import { Link } from 'react-router-dom';
import { paths } from '~/router';
import { Button } from '~/components/common';

const LoginButtonContainer = () => {
  const { KAKAO, NAVER } = paths;

  return (
    <div className="flex w-full flex-col items-center space-y-6 px-5">
      <Link to={KAKAO}>
        <Button size="extra-large" className="bg-brand-kakao text-base-black">
          카카오 계정으로 로그인
        </Button>
      </Link>
      <Link to={NAVER}>
        <Button size="extra-large" className="bg-brand-naver text-base-white">
          네이버 계정으로 로그인
        </Button>
      </Link>
    </div>
  );
};

export default LoginButtonContainer;
