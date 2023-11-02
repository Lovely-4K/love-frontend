import styled from '@emotion/styled';
import QuestionFormCreate from './QuestionFormCreate';
import QuestionFormLabel from './QuestionFormLabel';
import QuestionFormSelect from './QuestionFormSelect';

const QuestionFormContainer = styled.div``;

/** @todo - selected Item 이 없으면 button disabled 처리하기 */
const QuestionForm = () => {
  const myAnswerStatus: boolean = true;
  const myLoverStatus: boolean = true;

  return (
    <QuestionFormContainer>
      <QuestionFormLabel />
      <QuestionFormSelect />
      {!myAnswerStatus && (
        <div className="flex w-full justify-end">
          <button className="btn-small btn-primary w-full rounded-xl hover:border-none hover:bg-base-secondary">
            결정
          </button>
        </div>
      )}
      {myAnswerStatus && myLoverStatus && <QuestionFormCreate />}
    </QuestionFormContainer>
  );
};

export default QuestionForm;
