import { HtmlHTMLAttributes, memo } from 'react';
import { IconPosition } from '~/assets/icons';

interface MapCurPosButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  currentPosition: boolean;
}

const MapCurPosButton = memo(
  ({ currentPosition, onClick, ...props }: MapCurPosButtonProps) => {
    const iconStyle = currentPosition ? 'stroke-primary' : 'stroke-grey-300';

    return (
      <>
        <button
          onClick={onClick}
          className="btn btn-circle bg-base-white shadow-md"
          {...props}
        >
          <IconPosition className={`h-7 w-7 ${iconStyle}`} />
        </button>
      </>
    );
  },
);

export default MapCurPosButton;
