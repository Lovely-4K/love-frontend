import { useAtom, useAtomValue } from 'jotai';
import { useNavigate, useParams } from 'react-router-dom';
import { paths } from '~/router';
import useDeleteDiaryDetail from '~/services/diary/useDeleteDiaryDetail';
import useGetDiaryDetail from '~/services/diary/useGetDiaryDetail';
import { infoAtom } from '~/stores/diaryAtoms';
import { editableAtom } from '~/stores/diaryContentAtoms';

const useDiaryContentHeader = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { diaryId } = params;

  const { data: originDiary } = useGetDiaryDetail({ diaryId: params.diaryId });

  const [editable, setEditable] = useAtom(editableAtom);
  const info = useAtomValue(infoAtom);
  const kakaoMapId = originDiary?.kakaoMapId || info?.spotId || undefined;
  const placeName = originDiary?.placeName || info?.content || '';

  const { mutate: deleteMutate } = useDeleteDiaryDetail(kakaoMapId);

  const { DIARY } = paths;
  const prevLink = info ? `${DIARY.ROOT}/${info.spotId}` : `${DIARY.ROOT}`;

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
