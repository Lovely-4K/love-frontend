import { memo } from 'react';

interface MBTIButtonProps {
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

const MBTIButton = memo(
  ({ position, topItem, bottomItem, selected }: MBTIButtonProps) => {
    const topItemTextColor =
      selected === topItem ? 'text-base-primary' : 'text-grey-400';

    const bottomItemTextColor =
      selected === bottomItem ? 'text-base-primary' : 'text-grey-400';

    return (
      <div className={`flex flex-col`}>
        <button
          className={`h-8 w-8 bg-grey-200 ${topItemTextColor} ${topItemStyle[position]}`}
          value={topItem}
        >
          {topItem}
        </button>
        <button
          className={`h-8 w-8 bg-grey-200 ${bottomItemTextColor} ${bottomItemStyle[position]}`}
          value={bottomItem}
        >
          {bottomItem}
        </button>
      </div>
    );
  },
);

export default MBTIButton;
