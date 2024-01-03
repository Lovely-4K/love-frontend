import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { ChangeEvent, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '~/hooks';
import {
  DiaryCreateTextRequest,
  DiaryEditTextRequest,
  MapMarker,
} from '~/types';
import categoryType from '~/components/common/CategoryButton/CategoryTypes';
import useInfoToggle from '~/pages/Diary/hooks/Diary/useInfoToggle';
import useCreateDiaryDetail from '~/services/diary/useCreateDiaryDetail';
import useDeleteDiaryDetail from '~/services/diary/useDeleteDiaryDetail';
import useEditDiaryDetail from '~/services/diary/useEditDiaryDetail';
import { infoAtom } from '~/stores/diaryAtoms';
import {
  editDiaryAtom,
  editableAtom,
  existedImgAtom,
  imgUrlAtom,
  loadingAtom,
} from '~/stores/diaryContentAtoms';

const useDiaryContents = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { spotId, diaryId } = params;
  const info = useAtomValue(infoAtom);
  const { closeInfo } = useInfoToggle();
  const setLoading = useSetAtom(loadingAtom);
  const [imgUrl, setImgUrl] = useAtom(imgUrlAtom);
  const [editDiary, setEditDiary] = useAtom(editDiaryAtom);
  const [existedImg, setExistedImg] = useAtom(existedImgAtom);
  const setEditable = useSetAtom(editableAtom);
  const { handleShowToast } = useToast();
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

  // const handleChangeDatingDay = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;

  //   setEditDiary({
  //     ...editDiary,
  //     datingDay: value,
  //   });
  // };

  const handleDeleteDiary = () => {
    if (diaryId) {
      navigate(`/diary/${spotId}`);
      const diaryList = [parseInt(diaryId)];
      deleteMutate({ diaryList: diaryList });
      closeInfo();
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

  // const handleChangeCategory = (category: categoryType) => {
  //   setEditDiary({
  //     ...editDiary,
  //     category,
  //   });
  // };

  const handleChangeImgaes = (imgUrl: string[]) => {
    setImgUrl(imgUrl);
  };

  // const handleChangeScore = (score: number) => {
  //   setEditDiary({
  //     ...editDiary,
  //     score,
  //   });
  // };

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
    const { datingDay, category, myText, score } = editDiary;
    const texts: DiaryEditTextRequest = {
      datingDay,
      category,
      text: myText,
      score,
    };
    if (existedImg.length > 0) {
      texts.images = existedImg;
    }
    formData.append(
      'texts',
      new Blob([JSON.stringify(texts)], { type: 'application/json' }),
    );
    files.current.forEach((file) => formData.append('images', file));

    editFormMutate({ diaryId, formData });
  };

  const handleSubmitForm = () => {
    if (editDiary.myText.trim().length <= 0) {
      handleShowToast();

      return;
    }
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

export default useDiaryContents;
