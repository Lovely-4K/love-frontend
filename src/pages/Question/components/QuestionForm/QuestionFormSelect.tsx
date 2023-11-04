import { useContext, useState } from 'react';
import QuestionFormSelectItem from './QuestionFormSelectItem';
import { QuestionContext } from '~/pages/Question/contexts/QuestionContext';

const QuestionFormSelect = () => {
  const {
    firstChoice,
    secondChoice,
    thirdChoice = null,
    fourthChoice = null,
  } = useContext(QuestionContext);

  // const [active, setActive] = useState(false);

  // const handleClick = () => {
  //   setActive(!active);
  // };

  return (
    <div className="my-3 flex flex-col gap-3 lg:flex-row">
      <QuestionFormSelectItem active={false} answer={firstChoice} />
      <QuestionFormSelectItem active={false} answer={secondChoice} />
      {thirdChoice && (
        <QuestionFormSelectItem active={false} answer={thirdChoice} />
      )}
      {fourthChoice && (
        <QuestionFormSelectItem active={false} answer={fourthChoice} />
      )}
    </div>
  );
};

export default QuestionFormSelect;
