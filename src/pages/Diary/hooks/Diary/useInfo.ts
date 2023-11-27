import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

const useInfo = () => {
  const { info, setInfo } = useDiary();

  return {
    info,
    setInfo,
  };
};

export default useInfo;
