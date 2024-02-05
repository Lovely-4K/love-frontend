import { useSetAtom } from 'jotai';
import { selectSortMethodAtom } from '~/stores/diaryMainAtoms';

const useSelectSortMethod = () => {
  const setSelectSortMethod = useSetAtom(selectSortMethodAtom);

  const handleSortMethodClick = (sortMethod: string) => {
    setSelectSortMethod(sortMethod);
  };

  return { handleSortMethodClick };
};

export default useSelectSortMethod;
