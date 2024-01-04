import type categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { useAtomValue, useSetAtom } from 'jotai';
import { ChangeEvent, useRef } from 'react';
import { setEditDiaryPropertyAtom } from '~/stores/diaryContentAtoms';
import {
  editableAtom,
  getCurrentModeDiaryAtom,
} from '~/stores/diaryContentAtoms';

const useDiaryForm = () => {
  const editable = useAtomValue(editableAtom);
  const diary = useAtomValue(getCurrentModeDiaryAtom);
  const setEditDiaryProperty = useSetAtom(setEditDiaryPropertyAtom);

  const newFiles = useRef<File[]>([]);

  const handleChangeDatingDay = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setEditDiaryProperty({ datingDay: value });
  };

  const handleChangeScore = (score: number) => {
    setEditDiaryProperty({ score });
  };

  const handleChangeCategory = (category: categoryType) => {
    setEditDiaryProperty({ category });
  };

  const handleChangeMyText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target instanceof HTMLTextAreaElement) {
      const { value } = event.target;

      setEditDiaryProperty({ myText: value });
    }
  };

  const handleChangeImages = (imgURLs: string[]) => {
    setEditDiaryProperty({ imgURL: imgURLs });
  };

  const handleUploadImg = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const nextImgURL = [...diary.imgURL];

    if (files === null) {
      alert('하나 이상의 파일을 추가해주세요!');

      return;
    }

    for (const file of files) {
      if (nextImgURL.length === 5) {
        alert('파일은 최대 5장까지 첨부가능해요!');

        return;
      }

      newFiles.current.push(file);
      nextImgURL.push(URL.createObjectURL(file));
    }

    handleChangeImages(nextImgURL);
  };

  const handleDeleteImg = (id: number) => {
    const { imgURL } = diary;
    const nextImgURL = imgURL.filter((_, index) => index !== id);

    handleChangeImages(nextImgURL);
  };

  return {
    editable,
    diary,
    handleChangeDatingDay,
    handleChangeScore,
    handleChangeCategory,
    handleChangeMyText,
    handleUploadImg,
    handleDeleteImg,
  };
};

export default useDiaryForm;
