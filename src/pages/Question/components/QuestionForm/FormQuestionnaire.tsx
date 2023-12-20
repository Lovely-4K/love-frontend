import { QuestionFormResponse } from '~/types';

interface FormQuestionnaireProps {
  todayQuestion: QuestionFormResponse;
}

const FormQuestionnaire = ({ todayQuestion }: FormQuestionnaireProps) => {
  const { questionContent } = todayQuestion;

  return (
    <div className="mt-5 flex flex-col gap-2">
      <div className="mb-2 text-center text-xl text-base-primary md:text-[1.7rem]">
        Q. {questionContent}
      </div>
      <div className="pl-2 text-sm md:text-base">나의 답변은 무엇인가요?</div>
    </div>
  );
};

export default FormQuestionnaire;
