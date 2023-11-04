import styled from '@emotion/styled';
import { QuestionHeader, QuestionForm, QuestionChat } from './components';
import { useGetQuestion } from '~/pages/Question/hooks/useGetQuestion';
import { useGetQuestionDetail } from '~/pages/QuestionHistory/hooks/useGetQuestionDetail';
import { useGetQuestions } from '~/pages/QuestionHistory/hooks/useGetQuestions';

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
  const { data: question } = useGetQuestion();

  console.log(question);

  return (
    <QuestionContainer>
      <QuestionHeader />
      <QuestionForm />
      <QuestionChat />
    </QuestionContainer>
  );
};

export default Question;
