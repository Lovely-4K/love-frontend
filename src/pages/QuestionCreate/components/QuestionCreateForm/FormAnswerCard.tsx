import useQuestionCreateForm from '../../hooks/useQuestionCreateForm';
import { IconClose } from '~/assets/icons';
import { CircleButton } from '~/components/common';

interface FormAnswerCardProps {
  answer: string;
  index: number;
}

const FormAnswerCard = ({ answer, index }: FormAnswerCardProps) => {
  const { handleDeleteButton } = useQuestionCreateForm();

  return (
    <div className="card bg-grey-100">
      <div className="card-body h-12 flex-row items-center justify-between px-4">
        <p>{answer}</p>
        <div
          data-index={index}
          onClick={handleDeleteButton}
          className="card-actions"
        >
          <CircleButton
            editable={true}
            data-index={index}
            icon={IconClose}
            active={false}
          />
        </div>
      </div>
    </div>
  );
};

export default FormAnswerCard;
