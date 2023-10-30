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
      className="group flex h-20 w-20 flex-col items-center justify-center rounded-xl hover:bg-grey-200 aria-[current]:bg-grey-100"
    >
      <SvgComponent className="h-10 w-10 stroke-base-black group-hover:stroke-primary group-aria-[current]:stroke-primary" />
      <span className="font-medium group-hover:text-primary group-aria-[current]:text-primary">
        {label}
      </span>
    </NavLink>
  );
};

export default FooterItem;
