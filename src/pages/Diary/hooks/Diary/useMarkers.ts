import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

const useMarkers = () => {
  const { markers, setMarkers } = useDiary();

  return {
    markers,
    setMarkers,
  };
};

export default useMarkers;
