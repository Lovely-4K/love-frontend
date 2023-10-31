import { NavigationHeader } from '~/components/domain';

const QuestionCreateHeader = () => {
  return (
    <div className="flex justify-between">
      <NavigationHeader
        prevPageLink={'/question'}
        pageTitle="우리만의 질문 작성"
      />
    </div>
  );
};

export default QuestionCreateHeader;
