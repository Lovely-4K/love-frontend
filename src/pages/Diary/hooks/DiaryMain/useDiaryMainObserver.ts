import { useRef, useEffect } from 'react';
import useObserve from '~/hooks/useObserve';
import useDiaryContext from '~/pages/Diary/hooks/Diary/useDiaryContext';

const useDiaryMainObserver = () => {
  const { diarys, page, setPage } = useDiaryContext();
  const [observe] = useObserve(() => {
    setPage(page + 1);
  });
  const recordRef = useRef(null);

  useEffect(() => {
    if (recordRef && recordRef.current) {
      observe(recordRef.current);
    }
  }, [diarys]);

  return { recordRef };
};

export default useDiaryMainObserver;
