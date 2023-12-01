import { useRef, useEffect } from 'react';
import type { DiaryContent, Diarys } from '~/types';
import useObserve from '~/hooks/useObserve';

interface useDiaryMainObserverProps {
  diaryResponse: Diarys;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  diarys: DiaryContent[];
}

const useDiaryMainObserver = ({
  diaryResponse,
  page,
  setPage,
  diarys,
}: useDiaryMainObserverProps) => {
  const [observe] = useObserve(() => {
    setPage(page + 1);
  });
  const recordRef = useRef(null);

  useEffect(() => {
    if (diaryResponse.content.length < 10) return;
    if (recordRef && recordRef.current) {
      observe(recordRef.current);
    }
  }, [diarys]);

  return { recordRef };
};

export default useDiaryMainObserver;
