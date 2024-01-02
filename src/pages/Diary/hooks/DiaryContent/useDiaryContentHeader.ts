import { useAtom, useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import useDeleteDiaryDetail from '~/services/diary/useDeleteDiaryDetail';
import { infoAtom } from '~/stores/diaryAtoms';
import {
  getSetEditableAtom,
  getCurrentModeDiaryAtom,
} from '~/stores/diaryContentAtoms';

const useDiaryContentHeader = () => {
  const navigate = useNavigate();

  const [editable, setEditable] = useAtom(getSetEditableAtom);
  const [diary] = useAtom(getCurrentModeDiaryAtom);
  const info = useAtomValue(infoAtom);

  const { diaryId, kakaoMapId, placeName } = diary;
  const { DIARY } = paths;
  const prevLink = info ? `${DIARY.ROOT}/${kakaoMapId}` : `${DIARY.ROOT}`;

  const { mutate: deleteMutate } = useDeleteDiaryDetail(kakaoMapId);

  const handleStartEdit = () => {
    setEditable(true);
  };

  const handleDeleteDiary = () => {
    if (diaryId) {
      const URL = `/diary/${kakaoMapId || info?.spotId}`;
      const diaryList = [parseInt(diaryId)];

      navigate(URL);
      deleteMutate({ diaryList: diaryList });
    }
  };

  return {
    editable,
    prevLink,
    placeName: info?.content || placeName,
    handleStartEdit,
    handleDeleteDiary,
  };
};

export default useDiaryContentHeader;
