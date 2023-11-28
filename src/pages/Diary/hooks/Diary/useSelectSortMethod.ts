import { DiaryContextProps } from '~/pages/Diary/contexts/DiaryContext';

interface useSelectSortMethodProps {
  setSelectSortMethod: DiaryContextProps['setSelectSortMethod'];
}

const useSelectSortMethod = ({
  setSelectSortMethod,
}: useSelectSortMethodProps) => {
  const handleSortMethodClick = (sortMethod: string) => {
    setSelectSortMethod(sortMethod);
  };

  return { setSelectSortMethod, handleSortMethodClick };
};

export default useSelectSortMethod;
