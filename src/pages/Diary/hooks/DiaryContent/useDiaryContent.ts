import type categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { useContext, ChangeEvent } from 'react';
import type { Pictures } from '~/types';
import { DiaryContentContext } from '~/pages/Diary/contexts/DiaryContentContext';

const useDiaryContent = () => {
  const diaryContentContext = useContext(DiaryContentContext);
  const {
    editable,
    setEditable,
    diary,
    spotId,
    diaryId,
    formValue,
    formSetMethod,
  } = diaryContentContext;
  const { setDatingDay, setScore, setCategory, setMyText, setPictures } =
    formSetMethod;

  const handleChangeDatingDay = (event: ChangeEvent<HTMLInputElement>) => {
    setDatingDay(event.target.value);
  };

  const handleChangeMyText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target instanceof HTMLInputElement) {
      setMyText(event.target.value);
    }
  };

  const handleChangeCategory = (category: categoryType) => {
    setCategory(category);
  };

  const handleChangePictures = (pictures: Pictures) => {
    setPictures(pictures);
  };

  const handleEditMode = () => {
    setEditable(true);
  };

  const handleSubmitForm = () => {
    setEditable(false);
  };

  const handleEditCancel = () => {
    setEditable(false);
  };

  const handleChangeScore = (score: number) => {
    setScore(score);
  };

  return {
    data: {
      editable,
      spotId,
      diaryId,
      diary,
      ...formValue,
    },
    methods: {
      handleEditCancel,
      handleEditMode,
      handleSubmitForm,
      handleChangeDatingDay,
      handleChangeMyText,
      handleChangeScore,
      handleChangeCategory,
      handleChangePictures,
    },
  };
};

export default useDiaryContent;
