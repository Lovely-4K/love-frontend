import { useNavigate, useParams } from 'react-router-dom';
import { paths } from '~/router';

const useMovePrevPage = () => {
  const navigate = useNavigate();
  const { spotId, diaryId } = useParams();

  const movePrevPage = () => {
    if (diaryId) {
      navigate(`${paths.DIARY.ROOT}/${diaryId}`);
    } else if (spotId) {
      navigate(`${paths.DIARY.ROOT}`);
    }
  };

  return { movePrevPage };
};

export default useMovePrevPage;
