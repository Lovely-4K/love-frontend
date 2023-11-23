interface RatingProps {
  readonly: boolean;
  score?: undefined | number;
  handleChangeScore: (score: number) => void;
}

interface RatingInputProps {
  assignedScore: number;
  activateStatus: boolean;
}
const Rating = ({ readonly, score = 5, handleChangeScore }: RatingProps) => {
  const ratingInputArray = [...new Array(5)].map((_, index) => index < score);
  const RatingInput = ({ assignedScore, activateStatus }: RatingInputProps) => {
    return (
      <input
        onClick={() => handleChangeScore(assignedScore)}
        type="radio"
        name="rating-3"
        className="mask mask-heart w-5 bg-base-primary [&]:disabled:cursor-default"
        disabled={readonly}
        checked={activateStatus}
      />
    );
  };

  return (
    <div className="rating gap-1">
      {ratingInputArray.map((activateStatus, index) => {
        return (
          <RatingInput
            key={index}
            assignedScore={index + 1}
            activateStatus={activateStatus}
          />
        );
      })}
    </div>
  );
};

export default Rating;
