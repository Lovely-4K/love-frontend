import { useEffect, useState } from 'react';
import { IconHeart } from '~/assets/icons';

interface TemperatureBarProps {
  percent: number;
}

const TemperatureBar = ({ percent = 10 }: TemperatureBarProps) => {
  const [horizontal, setHorizontal] = useState(window.innerWidth <= 428);
  const modifiedPercent = percent >= 99 ? 98.7 : percent <= 1 ? 1.9 : percent;

  const wrapperStyle = horizontal
    ? 'bg-grey-100 h-4 w-full'
    : 'bg-grey-100 h-screen max-h-screen w-4';

  const progressStyle = {
    width: horizontal ? `${modifiedPercent}%` : '1rem',
    height: horizontal ? '1rem' : `${modifiedPercent}%`,
  };

  const iconBoxStyle = horizontal
    ? '-right-[0.94rem] -top-[0.49rem]'
    : '-right-[0.49rem] -top-[0.94rem]';

  useEffect(() => {
    const handleResize = () => {
      setHorizontal(window.innerWidth <= 428);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`${wrapperStyle} relative flex flex-col-reverse`}>
      <div className="bg-base-primary relative" style={progressStyle}>
        <IconHeart
          className={`fill-base-primary stroke-base-primary absolute h-8 w-8 ${iconBoxStyle}`}
        />
      </div>
    </div>
  );
};

export default TemperatureBar;
