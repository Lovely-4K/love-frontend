import useGetQuestion from '../../hooks/useGetQuestion';
import QuestionFormCreate from './QuestionFormCreate';
import QuestionFormLabel from './QuestionFormLabel';
import QuestionFormSelect from './QuestionFormSelect';
import { QuestionProvider } from '~/pages/Question/contexts/QuestionContext';

/** @todo - selected Item 이 없으면 button disabled 처리하기 */
const QuestionForm = () => {
  const myAnswerStatus: boolean = false;
  const myLoverStatus: boolean = true;

  useGetQuestion();

  return (
    <QuestionProvider>
      <div>
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
      </div>
    </QuestionProvider>
  );
};

export default QuestionForm;
