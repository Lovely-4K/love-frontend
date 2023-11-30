import { Button } from '~/components/common';

const MainContentErrorFallback = () => {
  return (
    <div>
      <div>무언가 오류가 생겼어요! 다시 시도해주세요!</div>
      <div>
        <Button size="medium" onClick={() => location.reload()}>
          새로고침 하기
        </Button>
      </div>
    </div>
  );
};

export default MainContentErrorFallback;
