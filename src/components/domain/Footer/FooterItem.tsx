import { FunctionComponent, SVGProps } from 'react';
import { NavLink } from 'react-router-dom';

interface FooterItemProps {
  url: string;
  svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  label: string;
}

const FooterItem = ({ url, svg, label }: FooterItemProps) => {
  const SvgComponent = svg;
  const activeLinkStyle = (isActive: boolean) => {
    return isActive
      ? '[&>button>div]:stroke-base-primary [&>button]:bg-grey-100 [&>button>div>*]:text-primary [&>button>div>*]:stroke-primary'
      : '';
  };

  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        'flex h-full w-[20%] items-center justify-center lg:h-1/5 lg:max-h-28 lg:w-full ' +
        activeLinkStyle(isActive)
      }
    >
      <button className="flex h-[90%] w-[80%] flex-col items-center justify-center rounded-xl stroke-base-black hover:bg-grey-100 [&>div>*]:hover:stroke-primary [&>div]:hover:text-primary">
        <div className="flex h-[50%] w-full items-center justify-center overflow-y-hidden">
          <SvgComponent className="h-10 w-10" />
        </div>
        <div className="[25%] flex w-full justify-center">
          <span className="font-medium btm-nav-label">{label}</span>
        </div>
      </button>
    </NavLink>
  );
};

export default FooterItem;
