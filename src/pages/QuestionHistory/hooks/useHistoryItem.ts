import { useState } from 'react';
import { useGetCoupleAnswer } from '~/services/question';

const useHistoryItem = (questionId: number) => {
  const [arcodianOpened, setArcodianOpened] = useState(false);
  const { data: questionDetail } = useGetCoupleAnswer(
    questionId,
    arcodianOpened,
  );

  const handleArcodianClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const inputTarget = event.target as HTMLInputElement;
    const inputTargetChecked = inputTarget.checked;

    if (inputTargetChecked === true) {
      setArcodianOpened(inputTargetChecked);
    }
  };

  return { handleArcodianClick, questionDetail };
};

export default useHistoryItem;
