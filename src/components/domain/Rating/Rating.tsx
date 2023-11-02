interface RatingProps {
  readonly: boolean;
}

const Rating = ({ readonly }: RatingProps) => {
  return (
    <div className="rating gap-1">
      <input
        type="radio"
        name="rating-3"
        className="mask mask-heart w-5 bg-base-primary"
        disabled={readonly}
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-heart w-5 bg-base-primary"
        disabled={readonly}
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-heart w-5 bg-base-primary"
        disabled={readonly}
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-heart w-5 bg-base-primary"
        disabled={readonly}
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-heart w-5 bg-base-primary"
        disabled={readonly}
      />
    </div>
  );
};

export default Rating;
