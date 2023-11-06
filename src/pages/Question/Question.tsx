import styled from '@emotion/styled';
import { QuestionHeader, QuestionForm, QuestionChat } from './components';
import { QuestionProvider } from '~/pages/Question/contexts/QuestionContext';

export const QuestionContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 3rem 4rem;
  diplay: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    width: 70%;
    padding: 4rem 10rem;
  }
`;

const Question = () => {
  return (
    <QuestionContainer>
      <QuestionHeader />
      <QuestionProvider>
        <QuestionForm />
        <QuestionChat />
      </QuestionProvider>
    </QuestionContainer>
  );
};

export default Question;
