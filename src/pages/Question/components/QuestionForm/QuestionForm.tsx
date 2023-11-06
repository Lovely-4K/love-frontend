import { useEffect } from 'react';
import useCreateTodayQuestion from '../../hooks/useCreateTodayQuestion';
import useGetQuestion from '../../hooks/useGetQuestion';
import QuestionFormCreate from './QuestionFormCreate';
import QuestionFormLabel from './QuestionFormLabel';
import QuestionFormSelect from './QuestionFormSelect';
import useGetQuestionDetail from '~/pages/QuestionHistory/hooks/useGetQuestionDetail';

const QuestionForm = () => {
  const { mutate: createTodayQuestionMutate } = useCreateTodayQuestion();

  useEffect(() => {
    createTodayQuestionMutate();
  }, [createTodayQuestionMutate]);

  const { data: question } = useGetQuestion();
  const { data: questionDetail } = useGetQuestionDetail(
    question?.body?.questionId || -1,
  );

  const { questionFormType = '' } = question?.body || {};
  const { myAnswer = '', opponentAnswer = '' } = questionDetail || {};

  const CreateForm = () =>
    questionFormType === 'SERVER' &&
    myAnswer &&
    opponentAnswer && <QuestionFormCreate />;

  return (
    <div>
      <QuestionFormLabel />
      <QuestionFormSelect />
      <CreateForm />
    </div>
  );
};

export default QuestionForm;
