import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '~/components/common';

const DiaryCreateButton = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Button
      size="large"
      className=" mb-5 bg-base-primary text-base-white"
      onClick={() => navigate(`${pathname}/create`)}
    >
      다이어리 작성하기
    </Button>
  );
};

export default DiaryCreateButton;
