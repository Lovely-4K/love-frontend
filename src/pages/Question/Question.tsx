import styled from '@emotion/styled';

const QuestionContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Question = () => {
  return (
    <QuestionContainer>
      <QuestionHeader />
      <QuestionForm />
      <QuestionChat />
    </QuestionContainer>
  );
};

export default Question;
