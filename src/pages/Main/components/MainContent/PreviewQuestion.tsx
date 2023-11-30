import { Link } from 'react-router-dom';
import { useMainContent } from '../../hooks';

const PreviewQuestion = () => {
  const { todayQuestion } = useMainContent();

  return (
    <div className="flex flex-col items-center justify-center py-4 lg:h-3/4">
      <div className="text-lg md:text-xl">{todayQuestion.questionContent}</div>
      <Link to="/question" className="mb-3 text-sm text-grey-500">
        답변하러 가기 →
      </Link>
    </div>
  );
};

export default PreviewQuestion;
