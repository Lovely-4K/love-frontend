import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

const useSelectSortMethod = () => {
  const { selectSortMethod, setSelectSortMethod } = useDiary();

  const handleSortMethodClick = (sortMethod: string) => {
    setSelectSortMethod(sortMethod);
  };

  return { selectSortMethod, setSelectSortMethod, handleSortMethodClick };
};

export default useSelectSortMethod;
