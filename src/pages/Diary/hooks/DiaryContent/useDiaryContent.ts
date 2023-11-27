import type categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { ChangeEvent, useRef } from 'react';
import { useParams } from 'react-router-dom';
import type { DiaryResponse, DiaryCreateTextRequest } from '~/types';
import useInfo from '~/pages/Diary/hooks/Diary/useInfo';
import useCreateDiaryDetail from '~/services/diary/useCreateDiaryDetail';
import useDeleteDiaryDetail from '~/services/diary/useDeleteDiaryDetail';
import useEditDiaryDetail from '~/services/diary/useEditDiaryDetail';

interface useDiaryContentParams {
  editDiary: DiaryResponse;
  setEditDiary: React.Dispatch<React.SetStateAction<DiaryResponse>>;
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const useDiaryContent = ({
  editDiary,
  setEditDiary,
  setEditable,
  images,
  setImages,
}: useDiaryContentParams) => {
  // const locate = useLocation();
  const params = useParams();
  const { mutate: createFormMutate } = useCreateDiaryDetail(
    editDiary.kakaoMapId,
  );
  const { mutate: editFormMutate } = useEditDiaryDetail(editDiary.kakaoMapId);
  const { mutate: deleteMutate } = useDeleteDiaryDetail(editDiary.kakaoMapId);
  const files = useRef<File[]>([]);
  const { info } = useInfo();

  const handleChangeDatingDay = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setEditDiary({
      ...editDiary,
      datingDay: value,
    });
  };

  const handleDeleteDiary = () => {
    const { diaryId } = params;

    if (diaryId) {
      deleteMutate({ diaryId });
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

  const handleChangeImgaes = (images: string[]) => {
    setImages(images);
  };

  const handleChangeScore = (score: number) => {
    setEditDiary({
      ...editDiary,
      score,
    });
  };

  const handleAddImages = (event: ChangeEvent<HTMLInputElement>) => {
    const fileLists = event.target.files!;
    const copyImages = [...images];

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
    if (editDiary.images === undefined) return;
    const images = [...editDiary.images].filter((_, index) => index !== id);

    handleChangeImgaes(images);
  };

  const handleEditMode = () => {
    setEditable(true);
  };

  // todo: 빈 문자열이면 오류 띄어야ㅏㅎㅁ
  const handleSubmitCreate = () => {
    const formData = new FormData();
    const { datingDay, category, score, myText } = editDiary;
    // const { spotId } = params;
    // const { latitude, longitude } = locate.state;
    const { position, content, address, spotId } = info!;
    const texts: DiaryCreateTextRequest = {
      placeName: content,
      kakaoMapId: Number(spotId),
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

    for (const file of files.current) {
      formData.append('images', file);
    }

    createFormMutate({ formData });
  };

  const handleSubmitEdit = (diaryId: string) => {
    const formData = new FormData();
    const { datingDay, category, myText, opponentText, score } = editDiary;
    const texts = {
      datingDay,
      category,
      myText,
      opponentText,
      score,
    };
    formData.append(
      'texts',
      new Blob([JSON.stringify(texts)], { type: 'application/json' }),
    );

    // if (files.current) {
    //   for (const file of files.current) {
    //     formData.append('images', file);
    //   }
    // }
    // formData.append('images', null);
    editFormMutate({ diaryId, formData });
  };

  const handleSubmitForm = () => {
    const { diaryId } = params;
    if (diaryId === undefined) {
      handleSubmitCreate();
    } else {
      handleSubmitEdit(diaryId);
    }
  };

  const handleEditCancel = () => {
    setEditable(false);
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
