import { HtmlHTMLAttributes, memo } from 'react';
import { IconPosition } from '~/assets/icons';

interface MapPositionButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  currentPosition: boolean;
}

const MapPositionButton = memo(
  ({ currentPosition, onClick, ...props }: MapPositionButtonProps) => {
    return (
      <>
        <button
          onClick={onClick}
          className="bg-base-white btn btn-circle shadow-md"
          {...props}
        >
          <IconPosition
            className={`h-7 w-7 ${
              currentPosition ? 'stroke-primary' : 'stroke-grey-300'
            }`}
          />
        </button>
      </>
    );
  },
);

export default MapPositionButton;
