import useQuestion from '~/pages/Question/hooks/useQuestion';

const FormQuestionnaire = () => {
  const { questionForm } = useQuestion();
  const { questionContent } = questionForm;

  return (
    <div className="mt-3 flex flex-col gap-5">
      <div className="font-title flex items-center justify-center px-3 py-5 text-base-primary">
        Q. {questionContent}
      </div>
      <div>나의 답변은 무엇인가요?</div>
    </div>
  );
};

export default FormQuestionnaire;
