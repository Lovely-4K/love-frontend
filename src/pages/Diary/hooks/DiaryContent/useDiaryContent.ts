import type categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { ChangeEvent, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import type { DiaryResponse, DiaryCreateTextRequest } from '~/types';
import useCreateDiaryDetail from '~/services/Diary/useCreateDiaryDetail';
import useDeleteDiaryDetail from '~/services/Diary/useDeleteDiaryDetail';
import useEditDiaryDetail from '~/services/Diary/useEditDiaryDetail';

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

  async function fetchImageAsBlob(url: string) {
    const response = await fetch(url);
    const blob = await response.blob();

    return blob;
  }

  function blobToFile(blob: Blob, fileName: string) {
    const file = new File([blob], fileName, { type: blob.type });
    files.current.push(file);
  }

  const changeUrlToFile = async (url: string) => {
    const imageBlob = await fetchImageAsBlob(url);
    blobToFile(imageBlob, url);
  };

  useEffect(() => {
    files.current = [];
    images.forEach((imageUrl) => changeUrlToFile(imageUrl));
  }, [images]);

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
    const { spotId } = params;
    // const { latitude, longitude } = locate.state;
    const texts: DiaryCreateTextRequest = {
      placeName: '두냉심열',
      kakaoMapId: Number(spotId),
      latitude: 37.4742361692428,
      longitude: 126.96667714943,
      address: '서울 관악구 봉천동 1638-13',
      datingDay,
      category,
      score,
      text: myText,
    };
    formData.append(
      'texts',
      new Blob([JSON.stringify(texts)], { type: 'application/json' }),
    );
    // if (files) {
    //   for (const file of files) {
    //     formData.append('images', file);
    //   }
    // }
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
