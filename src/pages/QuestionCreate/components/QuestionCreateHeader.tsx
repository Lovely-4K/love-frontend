import { NavigationHeader } from '~/components/domain';

const QuestionCreateHeader = () => {
  return (
    <div className="mx-[-3rem]">
      <NavigationHeader
        prevPageLink={'/question'}
        pageTitle="우리만의 질문 작성"
      />
    </div>
  );
};

export default QuestionCreateHeader;
