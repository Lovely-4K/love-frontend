import { useRef, useEffect } from 'react';
import type { DiaryContent } from '~/types';
import useObserve from '~/hooks/useObserve';

interface useDiaryMainObserverProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  diarys: DiaryContent[];
}

const useDiaryMainObserver = ({
  page,
  setPage,
  diarys,
}: useDiaryMainObserverProps) => {
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
