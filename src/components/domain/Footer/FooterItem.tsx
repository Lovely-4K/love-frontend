import { FunctionComponent, SVGProps } from 'react';
import { NavLink } from 'react-router-dom';

interface FooterItemProps {
  url: string;
  svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  label: string;
}

const FooterItem = ({ url, svg, label }: FooterItemProps) => {
  const SvgComponent = svg;

  return (
    <NavLink
      to={url}
      className="group flex h-14 w-14 flex-col items-center justify-center rounded-xl hover:bg-grey-200 aria-[current]:bg-grey-100 lg:h-20 lg:w-20"
    >
      <SvgComponent className="h-7 w-7 stroke-base-black group-hover:stroke-primary group-aria-[current]:stroke-primary lg:h-10 lg:w-10" />
      <span className="text-sm font-medium group-hover:text-primary group-aria-[current]:text-primary lg:text-base">
        {label}
      </span>
    </NavLink>
  );
};

export default FooterItem;
