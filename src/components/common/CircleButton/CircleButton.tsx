import { FunctionComponent, SVGProps } from 'react';

interface CircleButtonProps {
  label: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  active: boolean;
}

const CircleButton = ({ label, icon, active }: CircleButtonProps) => {
  const IconComponent = icon;
  const activeButtonStyle = active
    ? 'bg-base-primary'
    : 'border border-grey-200 bg-base-white';
  const activeIconStyle = active
    ? 'stroke-base-white fill-base-white'
    : 'stroke-grey-300 fill-grey-300';

  return (
    <div className="flex flex-col items-center">
      <button
        className={`btn-circle btn-sm relative overflow-hidden ${activeButtonStyle} group hover:border-0 hover:bg-base-secondary`}
      >
        <IconComponent
          className={`absolute left-[50%] top-[50%] z-20 w-[50%]  translate-x-[-50%] translate-y-[-50%] ${activeIconStyle} group-hover:fill-base-white group-hover:stroke-base-white`}
        />
      </button>
      {label && <div className="font-small py-1 text-grey-500">{label}</div>}
    </div>
  );
};

export default CircleButton;
