import styled from '@emotion/styled';

import QuestionFormCreate from './QuestionFormCreate';
import QuestionFormLabel from './QuestionFormLabel';
import QuestionFormSelect from './QuestionFormSelect';
import { QuestionProvider } from '~/pages/Question/contexts/QuestionContext';
import { usePatchAnswerQuestion } from '~/pages/Question/hooks/usePatchAnswerQuestion';

const QuestionFormContainer = styled.div``;

/** @todo - selected Item 이 없으면 button disabled 처리하기 */
const QuestionForm = () => {
  const myAnswerStatus: boolean = false;
  const myLoverStatus: boolean = true;

  const patchAnswerMutation = usePatchAnswerQuestion();

  const handlePatchAnswer = async (choiceNumber: number) => {
    try {
      const result = await patchAnswerMutation.mutateAsync({ choiceNumber });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <QuestionProvider>
      <QuestionFormContainer>
        <QuestionFormLabel />
        <QuestionFormSelect />
        {!myAnswerStatus && (
          <div className="flex w-full justify-end">
            <button
              onClick={() => handlePatchAnswer(1)}
              className="btn-small btn-primary w-full rounded-xl hover:border-none hover:bg-base-secondary"
            >
              결정
            </button>
          </div>
        )}
        {myAnswerStatus && myLoverStatus && <QuestionFormCreate />}
      </QuestionFormContainer>
    </QuestionProvider>
  );
};

export default QuestionForm;
