import { Link } from 'react-router-dom';
import { useMainContent } from '../../hooks';

const PreviewQuestion = () => {
  const { todayQuestion } = useMainContent();

  return (
    <div className="flex h-24 flex-col items-center justify-center lg:h-56">
      <div>{todayQuestion.questionContent}</div>
      <Link to="/question" className="text-sm text-grey-500">
        답변하러 가기 →
      </Link>
    </div>
  );
};

export default PreviewQuestion;
