import { useEffect, useState } from 'react';
import { IconHeart } from '~/assets/icons';

interface TemperatureBarProps {
  percent: number;
}

const TemperatureBar = ({ percent = 10 }: TemperatureBarProps) => {
  const [horizontal, setHorizontal] = useState(window.innerWidth <= 428);
  const modifiedPercent = percent >= 99 ? 98 : percent <= 2 ? 2.3 : percent;

  const wrapperStyle = horizontal
    ? 'bg-grey-100 h-4 w-full'
    : 'bg-grey-100 h-screen max-h-screen w-4';

  const progressStyle = {
    width: horizontal ? `${modifiedPercent}%` : '1rem',
    height: horizontal ? '1rem' : `${modifiedPercent}%`,
  };

  const iconBoxStyle = horizontal
    ? '-right-[0.94rem] -top-[0.74rem]'
    : '-right-[0.74rem] -top-[1.3rem]';

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
      <div className="relative bg-base-primary" style={progressStyle}>
        <IconHeart
          className={`absolute h-[2.5rem] w-[2.5rem] fill-base-primary stroke-base-primary ${iconBoxStyle}`}
        />
      </div>
    </div>
  );
};

export default TemperatureBar;
