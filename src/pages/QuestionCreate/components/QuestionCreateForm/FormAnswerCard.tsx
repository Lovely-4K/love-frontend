import { IconClose } from '~/assets/icons';
import { CircleButton } from '~/components/common';

interface FormAnswerCardProps {
  answer: string;
}

const FormAnswerCard = ({ answer }: FormAnswerCardProps) => {
  return (
    <div className="card bg-grey-100">
      <div className="card-body h-12 flex-row items-center justify-between px-4">
        <p>{answer}</p>
        <div className="card-actions">
          <CircleButton icon={IconClose} active={false} />
        </div>
      </div>
    </div>
  );
};

export default FormAnswerCard;
