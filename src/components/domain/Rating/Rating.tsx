interface RatingProps {
  readonly: boolean;
}

const Rating = ({ readonly }: RatingProps) => {
  return (
    <div className="rating gap-1">
      <input
        type="radio"
        name="rating-3"
        className="mask mask-heart w-[1.25rem] bg-base-primary"
        disabled={readonly ? true : false}
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-heart w-[1.25rem] bg-base-primary"
        disabled={readonly ? true : false}
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-heart w-[1.25rem] bg-base-primary"
        disabled={readonly ? true : false}
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-heart w-[1.25rem] bg-base-primary"
        disabled={readonly ? true : false}
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-heart w-[1.25rem] bg-base-primary"
        disabled={readonly ? true : false}
      />
    </div>
  );
};

export default Rating;
