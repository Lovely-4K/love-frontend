import { FunctionComponent, HTMLAttributes, SVGProps } from 'react';

interface CircleButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string | undefined;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  active: boolean;
  editable?: boolean;
}

const CircleButton = ({
  label,
  icon,
  active,
  editable = true,
}: CircleButtonProps) => {
  const IconComponent = icon;
  const activeButtonStyle = active
    ? 'bg-base-primary'
    : 'border border-grey-200 bg-base-white';
  const activeIconStyle = active
    ? 'stroke-base-white fill-base-white'
    : 'stroke-grey-300 fill-grey-300';
  const hoverButtonStyle = editable
    ? 'hover:bg-base-secondary hover:border-0'
    : '';
  const hoverIconStyle = editable
    ? 'group-hover:fill-base-white group-hover:stroke-base-white'
    : '';

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        disabled={!editable}
        className={`btn-circle btn-sm relative overflow-hidden ${activeButtonStyle} group ${hoverButtonStyle}`}
      >
        <IconComponent
          className={`absolute left-[50%] top-[50%] z-20 w-[50%] translate-x-[-50%] translate-y-[-50%] ${activeIconStyle} ${hoverIconStyle}`}
        />
      </button>
      {label && <div className="py-1 text-sm text-grey-500">{label}</div>}
    </div>
  );
};

export default CircleButton;
