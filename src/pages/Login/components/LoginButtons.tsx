import { Link } from 'react-router-dom';
import { paths } from '~/router';
import { Button } from '~/components/common';

const LoginButtonContainer = () => {
  const { KAKAO, NAVER } = paths;
  const { VITE_API_LOGIN_END_POINT } = import.meta.env;

  return (
    <div className="flex w-full flex-col items-center space-y-6 px-5">
      <Link to={`${VITE_API_LOGIN_END_POINT}${KAKAO}`}>
        <Button
          size="extra-large"
          className="btn border-none bg-brand-kakao text-lg text-base-black hover:scale-105 hover:bg-brand-kakao"
        >
          카카오 계정으로 로그인
        </Button>
      </Link>
      <Link to={`${VITE_API_LOGIN_END_POINT}${NAVER}`}>
        <Button
          size="extra-large"
          className="btn border-none bg-brand-naver text-lg text-base-white hover:scale-105 hover:bg-brand-naver"
        >
          네이버 계정으로 로그인
        </Button>
      </Link>
    </div>
  );
};

export default LoginButtonContainer;
