import useQuestion from '~/pages/Question/hooks/useQuestion';

const FormQuestionnaire = () => {
  const { questionForm } = useQuestion();
  const { questionContent } = questionForm;

  return (
    <div className="mt-5 flex flex-col gap-2">
      <div className="text-lg text-base-primary md:text-xl">
        Q. {questionContent}
      </div>
      <div className="pl-2 text-sm md:text-base">나의 답변은 무엇인가요?</div>
    </div>
  );
};

export default FormQuestionnaire;
