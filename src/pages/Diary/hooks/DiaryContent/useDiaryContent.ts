import type categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { ChangeEvent, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { DiaryResponse, DiaryCreateTextRequest, MapMarker } from '~/types';
import useDiaryContext from '~/pages/Diary/hooks/Diary/useDiaryContext';
import useCreateDiaryDetail from '~/services/diary/useCreateDiaryDetail';
import useDeleteDiaryDetail from '~/services/diary/useDeleteDiaryDetail';
import useEditDiaryDetail from '~/services/diary/useEditDiaryDetail';

interface useDiaryContentParams {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  editDiary: DiaryResponse;
  setEditDiary: React.Dispatch<React.SetStateAction<DiaryResponse>>;
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
  imgUrl: string[];
  setImgUrl: React.Dispatch<React.SetStateAction<string[]>>;
  existedImg: string[];
  setExistedImg: React.Dispatch<React.SetStateAction<string[]>>;
}

const useDiaryContent = ({
  setLoading,
  editDiary,
  setEditDiary,
  setEditable,
  imgUrl,
  setImgUrl,
  existedImg,
  setExistedImg,
}: useDiaryContentParams) => {
  const navigate = useNavigate();
  const params = useParams();
  const { info } = useDiaryContext();
  const { spotId, diaryId } = params;
  const { mutate: createFormMutate } = useCreateDiaryDetail(
    spotId as string,
    setLoading,
  );
  const { mutate: editFormMutate } = useEditDiaryDetail(
    spotId || editDiary.kakaoMapId,
    setLoading,
  );
  const { mutate: deleteMutate } = useDeleteDiaryDetail(
    spotId || editDiary.kakaoMapId,
  );
  const files = useRef<File[]>([]);

  const handleChangeDatingDay = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setEditDiary({
      ...editDiary,
      datingDay: value,
    });
  };

  const handleDeleteDiary = () => {
    if (diaryId) {
      navigate(`/diary/${spotId}`);
      const diaryList = [parseInt(diaryId)];
      deleteMutate({ diaryList: diaryList });
    }
  };

  const handleChangeMyText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target instanceof HTMLTextAreaElement) {
      const { value } = event.target;

      setEditDiary({
        ...editDiary,
        myText: value,
      });
    }
  };

  const handleChangeCategory = (category: categoryType) => {
    setEditDiary({
      ...editDiary,
      category,
    });
  };

  const handleChangeImgaes = (imgUrl: string[]) => {
    setImgUrl(imgUrl);
  };

  const handleChangeScore = (score: number) => {
    setEditDiary({
      ...editDiary,
      score,
    });
  };

  const handleAddImages = (event: ChangeEvent<HTMLInputElement>) => {
    const fileLists = event.target.files!;
    const copyImages = [...imgUrl];

    for (let i = 0; i < fileLists.length; i++) {
      if (copyImages.length === 5) {
        alert('파일은 최대 5장까지 첨부가능해요!');

        return;
      }
      const currentImageUrl = URL.createObjectURL(fileLists[i]);
      files.current.push(fileLists[i]);
      copyImages.push(currentImageUrl);
    }

    handleChangeImgaes(copyImages);
  };

  const handleDeleteImage = (id: number) => {
    const nextImgUrl = imgUrl.filter((_, index) => index !== id);
    const nextExistedImg = imgUrl.filter((_, index) => index !== id);
    handleChangeImgaes(nextImgUrl);
    setExistedImg(nextExistedImg);
  };

  const handleEditMode = () => {
    setEditable(true);
  };

  // todo: 빈 문자열이면 오류 띄어야ㅏㅎㅁ
  const handleSubmitCreate = () => {
    const formData = new FormData();
    const { datingDay, category, score, myText } = editDiary;
    const {
      position,
      content,
      address,
      spotId: kakaoMapId,
    } = info as MapMarker;
    const texts: DiaryCreateTextRequest = {
      placeName: content,
      kakaoMapId: Number(kakaoMapId),
      latitude: position.lat,
      longitude: position.lng,
      address: address,
      datingDay,
      category,
      score,
      text: myText,
    };
    formData.append(
      'texts',
      new Blob([JSON.stringify(texts)], { type: 'application/json' }),
    );
    files.current.forEach((file) => {
      formData.append('images', file);
    });
    createFormMutate({ formData });
  };

  const handleSubmitEdit = (diaryId: string) => {
    const formData = new FormData();
    const { datingDay, category, myText, opponentText, score } = editDiary;
    const texts = {
      datingDay,
      category,
      myText,
      opponentText: opponentText === null ? 'ㅎㅇ' : opponentText,
      score,
      images: existedImg,
    };
    console.log(texts);
    formData.append(
      'texts',
      new Blob([JSON.stringify(texts)], { type: 'application/json' }),
    );
    files.current.forEach((file) => formData.append('images', file));

    editFormMutate({ diaryId, formData });
  };

  const handleSubmitForm = () => {
    if (diaryId === undefined) {
      handleSubmitCreate();
    } else {
      handleSubmitEdit(diaryId);
    }
  };

  const handleEditCancel = () => {
    setEditable(false);

    if (diaryId === undefined) {
      navigate(-1);
    }
  };

  return {
    handleEditCancel,
    handleEditMode,
    handleSubmitForm,
    handleChangeDatingDay,
    handleChangeMyText,
    handleChangeScore,
    handleChangeCategory,
    handleChangeImgaes,
    handleAddImages,
    handleDeleteImage,
    handleDeleteDiary,
  };
};

export default useDiaryContent;
