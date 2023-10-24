import { IconHeart } from '~/assets/icons';

interface TemperatureBarProps {
  percent: number;
  horizontal?: boolean;
}

const TemperatureBar = ({
  percent = 10,
  horizontal = false,
}: TemperatureBarProps) => {
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
