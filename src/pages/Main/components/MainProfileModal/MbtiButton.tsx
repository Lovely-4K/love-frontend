import { memo } from 'react';

interface MbtiButtonProps {
  position: 'left' | 'center' | 'right';
  topItem: 'E' | 'N' | 'F' | 'J';
  bottomItem: 'I' | 'S' | 'T' | 'P';
}

const MbtiButton = memo(
  ({ position, topItem, bottomItem }: MbtiButtonProps) => {
    const topItemStyle =
      position === 'left'
        ? 'rounded-ss-lg'
        : position === 'right'
        ? 'rounded-se-lg'
        : '';

    const bottomItemStyle =
      position === 'left'
        ? 'rounded-es-lg'
        : position === 'right'
        ? 'rounded-ee-lg'
        : '';

    return (
      <div className={`flex flex-col`}>
        <button
          className={`h-8 w-8 bg-grey-300 text-base-white ${topItemStyle}`}
        >
          {topItem}
        </button>
        <button
          className={`h-8 w-8 bg-grey-300 text-base-white ${bottomItemStyle}`}
        >
          {bottomItem}
        </button>
      </div>
    );
  },
);

export default MbtiButton;
