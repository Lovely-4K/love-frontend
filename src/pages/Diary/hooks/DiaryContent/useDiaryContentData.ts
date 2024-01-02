import { useAtom } from 'jotai';
import { useParams } from 'react-router-dom';
import useGetDiaryDetail from '~/services/diary/useGetDiaryDetail';
import { setOriginDiaryAtom } from '~/stores/diaryContentAtoms';

const useDiaryContentData = () => {
  const [, setOrigin] = useAtom(setOriginDiaryAtom);
  const params = useParams();
  const { diaryId } = params;
  const { data } = useGetDiaryDetail({ diaryId });

  setOrigin(data);
};

export default useDiaryContentData;
