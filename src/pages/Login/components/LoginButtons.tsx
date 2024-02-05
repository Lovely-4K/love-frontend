import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '~/hooks';
import { paths } from '~/router';
import { Button } from '~/components/common';
import { useLoginTrial } from '~/services/user';

const LoginButtonContainer = () => {
  const { KAKAO, NAVER } = paths;
  const { VITE_API_LOGIN_END_POINT } = import.meta.env;
  const { setLoginParams } = useLogin();
  const { data } = useLoginTrial();
  const navigate = useNavigate();

  if (!data) return null;

  const handleTrialClick = () => {
    const { accessToken, refreshToken } = data;
    setLoginParams({ accessToken, refreshToken });
    navigate(paths.MAIN);
  };

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
      <button
        onClick={handleTrialClick}
        className="text-base text-base-white underline underline-offset-8"
      >
        체험하기
      </button>
    </div>
  );
};

export default LoginButtonContainer;
