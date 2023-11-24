import { HtmlHTMLAttributes, memo } from 'react';
import { IconHeart } from '~/assets/icons';

interface MapFilterButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  type: 'ALL' | 'GONE' | 'YET' | '';
}

const iconStyles = {
  GONE: 'fill-base-primary stroke-base-primary h-5 w-5',
  YET: 'fill-grey-300 stroke-grey-300 h-5 w-5',
};

const IconALL = memo(() => {
  return (
    <div className="relative h-full w-full">
      <IconHeart
        className={`${iconStyles.GONE} absolute left-0 top-1/2 z-10 -translate-y-1/2 translate-x-[45%]`}
      />
      <IconHeart
        className={`${iconStyles.YET} z-10] absolute right-0 top-1/2 -translate-x-[45%] -translate-y-1/2`}
      />
    </div>
  );
});

const MapFilterButton = memo(
  ({ onClick, type = 'ALL', ...props }: MapFilterButtonProps) => {
    const IconElement =
      type === 'ALL' ? (
        <IconALL />
      ) : type === 'GONE' ? (
        <IconHeart className={iconStyles.GONE} />
      ) : (
        <IconHeart className={iconStyles.YET} />
      );

    return (
      <button
        onClick={onClick}
        className="btn btn-circle bg-base-white shadow-md"
        {...props}
      >
        {IconElement}
      </button>
    );
  },
);

export default MapFilterButton;
