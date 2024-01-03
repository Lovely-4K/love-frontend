import useDiaryForm from '../../hooks/DiaryContent/useDiaryForm';
import { DiaryCategories } from '../DiaryCommon';

const DiaryContentCategories = () => {
  const { diary, editable, handleChangeCategory } = useDiaryForm();
  const { category } = diary;

  return (
    <DiaryCategories
      defaultCategory={category}
      editable={editable}
      handleChangeCategory={handleChangeCategory}
    />
  );
};

export default DiaryContentCategories;
