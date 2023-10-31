import { IconMenu } from '~/assets/icons';
import { CircleButton } from '~/components/common';

const QuestionHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="lg:font-title-large font-title">오늘의 질문</div>
      <div>
        <CircleButton label="전체" icon={IconMenu} active={false} />
      </div>
    </div>
  );
};

export default QuestionHeader;
