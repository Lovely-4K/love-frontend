import { useCallback, useEffect, useState } from 'react';
import { IconHeart } from '~/assets/icons';

const DESKTOP_WIDTH = 1024;

interface TemperatureBarProps {
  percent: number;
}

const TemperatureBar = ({ percent = 0 }: TemperatureBarProps) => {
  const [horizontal, setHorizontal] = useState(
    window.innerWidth <= DESKTOP_WIDTH,
  );

  const getModifiedPercent = useCallback(
    (percent: number) => {
      if (percent >= 99) {
        return horizontal ? 95 : 99;
      }
      if (percent < 2.5) {
        return horizontal ? 4 : 2.5;
      }

      return percent;
    },
    [horizontal],
  );

  const modifiedPercent = getModifiedPercent(percent);

  const progressStyle = {
    width: horizontal ? `${modifiedPercent}%` : '1rem',
    height: horizontal ? '1rem' : `${modifiedPercent}%`,
  };

  useEffect(() => {
    const handleResize = () => {
      setHorizontal(window.innerWidth <= DESKTOP_WIDTH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex h-4 w-screen flex-col-reverse bg-grey-100 lg:h-screen lg:w-4">
      <div className="relative h-4 bg-base-primary" style={progressStyle}>
        <IconHeart className="absolute -top-3 right-0 h-10 w-10 translate-x-1/2 fill-base-primary stroke-base-primary lg:left-1/2 lg:-translate-x-1/2" />
      </div>
    </div>
  );
};

export default TemperatureBar;
