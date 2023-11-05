import useQuestionForm from '~/pages/Question/hooks/useQuestionForm';

const QuestionFormLabel = () => {
  const { questionContent } = useQuestionForm();

  return (
    <div className="mt-3 flex flex-col gap-5">
      <div className="flex items-center justify-center rounded-xl bg-base-secondary px-3 py-5 text-base-white">
        {questionContent}
      </div>
      <div>나의 답변은 무엇인가요?</div>
    </div>
  );
};

export default QuestionFormLabel;
