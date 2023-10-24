import { HtmlHTMLAttributes, memo } from 'react';
import { IconHeart } from '~/assets/icons';

interface MapFilterButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  type: 'all' | 'visited' | 'unvisited';
}

const iconStyles = {
  visited: 'fill-base-primary stroke-base-primary h-5 w-5',
  unvisited: 'fill-grey-300 stroke-grey-300 h-5 w-5',
};

const IconAll = memo(() => {
  return (
    <div className="relative h-full w-full">
      <IconHeart
        className={`${iconStyles.visited} absolute left-0 top-1/2 z-10 -translate-y-1/2 translate-x-[45%]`}
      />
      <IconHeart
        className={`${iconStyles.unvisited} z-10] absolute right-0 top-1/2 -translate-x-[45%] -translate-y-1/2`}
      />
    </div>
  );
});

const MapFilterButton = memo(
  ({ onClick, type, ...props }: MapFilterButtonProps) => {
    return (
      <button
        onClick={onClick}
        className="bg-base-white btn btn-circle shadow-md"
        {...props}
      >
        {type === 'all' ? (
          <IconAll />
        ) : type === 'visited' ? (
          <IconHeart className={iconStyles.visited} />
        ) : (
          <IconHeart className={iconStyles.unvisited} />
        )}
      </button>
    );
  },
);

export default MapFilterButton;
