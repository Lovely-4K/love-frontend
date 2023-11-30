import { Link } from 'react-router-dom';
import { IconMenu } from '~/assets/icons';
import { CircleButton } from '~/components/common';

const QuestionHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-xl md:text-2xl">오늘의 질문</div>
      <Link to={'/question/history'}>
        <CircleButton editable={true} icon={IconMenu} active={false} />
      </Link>
    </div>
  );
};

export default QuestionHeader;
