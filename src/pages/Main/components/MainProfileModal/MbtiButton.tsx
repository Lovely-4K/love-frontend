import { memo } from 'react';

interface MbtiButtonProps {
  position: 'left' | 'center' | 'right';
  topItem: 'E' | 'N' | 'F' | 'J';
  bottomItem: 'I' | 'S' | 'T' | 'P';
  selected?: 'E' | 'I' | 'N' | 'S' | 'F' | 'T' | 'J' | 'P' | unknown;
}

const topItemStyle = {
  left: 'rounded-ss-lg',
  center: '',
  right: 'rounded-se-lg',
};

const bottomItemStyle = {
  left: 'rounded-es-lg',
  center: '',
  right: 'rounded-ee-lg',
};

const MbtiButton = memo(
  ({ position, topItem, bottomItem, selected }: MbtiButtonProps) => {
    return (
      <div className={`flex flex-col`}>
        <button
          className={`h-8 w-8 bg-grey-200 ${
            selected === topItem ? 'text-base-primary' : 'text-grey-400'
          } ${topItemStyle[position]}`}
          value={topItem}
        >
          {topItem}
        </button>
        <button
          className={`h-8 w-8 bg-grey-200 ${
            selected === bottomItem ? 'text-base-primary' : 'text-grey-400'
          } ${bottomItemStyle[position]}`}
          value={bottomItem}
        >
          {bottomItem}
        </button>
      </div>
    );
  },
);

export default MbtiButton;
