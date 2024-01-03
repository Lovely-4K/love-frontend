import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '~/components/common';
import { useCreateTodayQuestion, useGetQuestion } from '~/services/question';

const PreviewQuestion = () => {
  const {
    mutate: createTodayQuestion,
    isError,
    isSuccess,
  } = useCreateTodayQuestion();
  const { data: todayQuestion } = useGetQuestion(isError || isSuccess);

  useEffect(() => {
    createTodayQuestion();
  }, [createTodayQuestion]);

  if (!todayQuestion)
    return (
      <Loading
        size="medium"
        className="h-full self-center justify-self-center"
      />
    );

  return (
    <div className="flex flex-col items-center justify-center py-4 lg:h-3/4">
      <div className="text-lg md:text-xl">{todayQuestion.questionContent}</div>
      <Link to="/question" className="mb-3 text-sm text-grey-500">
        답변하러 가기 →
      </Link>
    </div>
  );
};

export default PreviewQuestion;
