interface useSelectSortMethodProps {
  setSelectSortMethod: React.Dispatch<React.SetStateAction<string>>;
}

const useSelectSortMethod = ({
  setSelectSortMethod,
}: useSelectSortMethodProps) => {
  const handleSortMethodClick = (sortMethod: string) => {
    setSelectSortMethod(sortMethod);
  };

  return { handleSortMethodClick };
};

export default useSelectSortMethod;
