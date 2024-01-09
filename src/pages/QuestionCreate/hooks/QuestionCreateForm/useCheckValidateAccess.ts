import { useLocation } from 'react-router-dom';

const useCheckValidateAccess = () => {
  const locate = useLocation();
  const { state } = locate;

  if (!state && !state?.accessFlag) {
    throw new Error('앗! 유효한 접근이 아니에요! 올바른 경로로 접근해주세요!');
  }
};

export default useCheckValidateAccess;
