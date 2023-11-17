import { Button } from '~/components/common';

interface QuestionFormSelectItemProps {
  answer: string | null | undefined;
  activeStatus: boolean;
  handleClickAnswer: React.MouseEventHandler<HTMLButtonElement>;
}

const FormAnswerItem = ({
  answer,
  activeStatus,
  handleClickAnswer,
}: QuestionFormSelectItemProps) => {
  const activeStyle = activeStatus
    ? 'border-2 border-base-secondary text-base-primary transition-all duration-500'
    : 'border-2 border-grey-200  hover:bg-grey-100';

  return (
    answer && (
      <Button
        onClick={handleClickAnswer}
        className={`box-border flex flex-grow cursor-pointer items-center justify-center rounded-xl py-3 lg:min-w-[30%] lg:max-w-[50%] ${activeStyle}`}
      >
        {answer}
      </Button>
    )
  );
};

export default FormAnswerItem;
