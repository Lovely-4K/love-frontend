import type categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { useAtom, useAtomValue } from 'jotai';
import { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '~/hooks';
import {
  DiaryEditTextRequest,
  DiaryCreateTextRequest,
  MapMarker,
} from '~/types';
import useCreateDiaryDetail from '~/services/diary/useCreateDiaryDetail';
import useEditDiaryDetail from '~/services/diary/useEditDiaryDetail';
import useGetDiaryDetail from '~/services/diary/useGetDiaryDetail';
import { infoAtom } from '~/stores/diaryAtoms';
import { editableAtom, editDiaryAtom } from '~/stores/diaryContentAtoms';
import { checkImageLength, checkImageType } from '~/utils/checkImageValidation';
import { changeImageType } from '~/utils/Diary';

const useDiaryForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const info = useAtomValue(infoAtom);

  const { data: originDiary } = useGetDiaryDetail({ diaryId: params.diaryId });
  const [editDiary, setEditDiary] = useAtom(editDiaryAtom);

  const { handleShowToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [editable, setEditable] = useAtom(editableAtom);

  const { mutate: createFormMutate } = useCreateDiaryDetail(
    params.spotId as string,
    setLoading,
  );
  const { mutate: editFormMutate } = useEditDiaryDetail(
    params.spotId || info!.spotId || originDiary!.kakaoMapId,
    setLoading,
  );

  useEffect(() => {
    if (originDiary === undefined) return;

    const { datingDay, category, score, myText, opponentText, pictures } =
      originDiary;
    const changedImgURL = changeImageType(pictures);
    setEditDiary({
      datingDay,
      category,
      score,
      myText,
      opponentText,
      imgURL: [...changedImgURL],
      existedImgURL: [...changedImgURL],
      newFile: [],
    });
  }, [originDiary, setEditDiary]);

  const handleEditCancel = () => {
    setEditable(false);

    if (params.diaryId === undefined) {
      navigate(-1);
    }
  };

  const handleChangeDatingDay = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setEditDiary({ ...editDiary, datingDay: value });
  };

  const handleChangeScore = (score: number) => {
    setEditDiary({ ...editDiary, score });
  };

  const handleChangeCategory = (category: categoryType) => {
    setEditDiary({ ...editDiary, category });
  };

  const handleChangeMyText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target instanceof HTMLTextAreaElement) {
      const { value } = event.target;

      setEditDiary({ ...editDiary, myText: value });
    }
  };

  const handleChangeImages = (
    imgURLs: string[],
    existedImgURL?: string[],
    newFile?: File[],
  ) => {
    const nextEditDiary = {
      ...editDiary,
      imgURL: [...imgURLs],
    };
    if (existedImgURL) {
      nextEditDiary.existedImgURL = existedImgURL;
    }
    if (newFile) {
      nextEditDiary.newFile = newFile;
    }
    setEditDiary(nextEditDiary);
  };

  const handleUploadImg = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const nextImgURL = [...editDiary.imgURL];
    const newFile = [...editDiary.newFile];

    if (files === null) {
      alert('하나 이상의 파일을 추가해주세요!');

      return;
    }

    const [validation, message] = checkImageLength(nextImgURL, files);

    if (!validation) {
      alert(message);

      return;
    }

    for (const file of files) {
      const [validation, message] = checkImageType(file);
      if (!validation) {
        alert(message);

        return;
      }

      const fileURL = URL.createObjectURL(file);
      nextImgURL.push(fileURL);
      newFile.push(file);
    }

    handleChangeImages(nextImgURL, undefined, newFile);
  };

  const handleDeleteImg = (id: number) => {
    const { imgURL, newFile, existedImgURL } = editDiary;
    const nextImgURL = imgURL.filter((_, index) => index !== id);
    const nextExistedImgURL = existedImgURL.filter((_, index) => index !== id);
    const nextNewFile = newFile.filter(
      (_, index) => index !== id - existedImgURL.length,
    );

    handleChangeImages(nextImgURL, nextExistedImgURL, nextNewFile);
  };

  const fillFormData = (formData: FormData, type: 'create' | 'edit') => {
    const { datingDay, category, myText, score, existedImgURL, newFile } =
      editDiary;
    const {
      position,
      content,
      address,
      spotId: kakaoMapId,
    } = info as MapMarker;
    const texts: DiaryEditTextRequest | DiaryCreateTextRequest =
      type === 'create'
        ? {
            placeName: content,
            kakaoMapId: Number(kakaoMapId),
            latitude: position.lat,
            longitude: position.lng,
            address,
            datingDay,
            category,
            score,
            text: myText,
          }
        : {
            datingDay,
            category,
            text: myText,
            score,
            images: existedImgURL,
          };

    formData.append(
      'texts',
      new Blob([JSON.stringify(texts)], { type: 'application/json' }),
    );
    newFile.forEach((file) => formData.append('images', file));

    return formData;
  };

  const handleSubmitDiary = () => {
    if (editDiary.myText.trim().length <= 0) {
      handleShowToast();

      return;
    }

    const formData = new FormData();

    if (params.diaryId) {
      const filledFormData = fillFormData(formData, 'edit');
      editFormMutate({ diaryId: params.diaryId, formData: filledFormData });
    } else {
      const filledFormData = fillFormData(formData, 'create');
      createFormMutate({ formData: filledFormData });
    }
  };

  return {
    editable,
    diary: editable
      ? editDiary
      : originDiary === undefined
      ? editDiary
      : originDiary,
    loading,
    handleChangeDatingDay,
    handleChangeScore,
    handleChangeCategory,
    handleChangeMyText,
    handleUploadImg,
    handleDeleteImg,
    handleEditCancel,
    handleSubmitDiary,
  };
};

export default useDiaryForm;
