import type categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { ChangeEvent, useEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import type { Pictures, DiaryResponse, DiaryCreateTextRequest } from '~/types';
import { changeImageType } from './../../../../utils/Diary';

interface useDiaryContentParams {
  diary: DiaryResponse;
  setDiary: React.Dispatch<React.SetStateAction<DiaryResponse>>;
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
}

const useDiaryContent = ({
  diary,
  setDiary,
  setEditable,
}: useDiaryContentParams) => {
  const locate = useLocation();
  const params = useParams();
  const { placeName, kakaoMapId, latitude, longitude } = useMemo(
    () => locate.state,
    [locate],
  );
  const { diaryId } = useMemo(() => params, [params]);

  const handleChangeDatingDay = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setDiary({
      ...diary,
      datingDay: value,
    });
  };

  const handleChangeMyText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target instanceof HTMLTextAreaElement) {
      const { value } = event.target;

      setDiary({
        ...diary,
        myText: value,
      });
    }
  };

  const handleChangeCategory = (category: categoryType) => {
    setDiary({
      ...diary,
      category,
    });
  };

  const handleChangeImgaes = (images: string[]) => {
    setDiary({
      ...diary,
      images,
    });
  };

  const handleChangeScore = (score: number) => {
    setDiary({
      ...diary,
      score,
    });
  };

  const changePictureToImage = (pictures: Pictures) => {
    const images = changeImageType(pictures);

    setDiary({
      ...diary,
      images,
    });
  };

  const handleChangeFileList = (fileList: FileList) => {
    setDiary({
      ...diary,
      files: fileList,
    });
  };

  const handleAddImages = (event: ChangeEvent<HTMLInputElement>) => {
    if (diary.images === undefined) return;

    const fileLists = event.target.files!;
    const images = [...diary.images];
    if (images.length > 5) {
      alert('사진은 최대 5개까지 첨부가능해요!');

      return;
    }

    for (let i = 0; i < fileLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(fileLists[i]);
      images.push(currentImageUrl);
    }

    handleChangeFileList(fileLists);
    handleChangeImgaes(images);
  };

  const handleDeleteImage = (id: number) => {
    if (diary.images === undefined) return;
    const images = [...diary.images].filter((_, index) => index !== id);

    handleChangeImgaes(images);
  };

  const handleEditMode = () => {
    setEditable(true);
  };

  const handleSubmitCreate = () => {
    const formData = new FormData();
    const { datingDay, category, score, files, myText } = diary;
    const texts: DiaryCreateTextRequest = {
      placeName,
      kakaoMapId,
      latitude,
      longitude,
      datingDay,
      category,
      score,
      text: myText,
    };
    formData.append('text', JSON.stringify(texts));
    if (files) {
      for (const file of files) {
        formData.append('images', file);
      }
    }

    //! create API 요청
  };

  const handleSubmitEdit = () => {
    const formData = new FormData();
    const { datingDay, category, myText, opponentText, score } = diary;
    const texts = JSON.stringify({
      datingDay,
      category,
      myText,
      opponentText,
      score,
    });
    formData.append('text', texts);
  };

  const handleSubmitForm = () => {
    if (diaryId === undefined) {
      handleSubmitCreate();
    } else {
      handleSubmitEdit();
    }
  };

  const handleEditCancel = () => {
    setEditable(false);
  };

  useEffect(() => {
    changePictureToImage(diary.pictures);
  }, []);

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
  };
};

export default useDiaryContent;
