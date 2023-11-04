import { paths } from '~/router';
import { NavigationHeader } from '~/components/domain';

const QuestionCreateHeader = () => {
  const { QUESTION } = paths;

  return (
    <div className="mx-[-3rem]">
      <NavigationHeader
        prevPageLink={QUESTION}
        pageTitle="우리만의 질문 작성"
      />
    </div>
  );
};

export default QuestionCreateHeader;
