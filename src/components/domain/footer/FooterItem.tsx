import { FunctionComponent, SVGProps } from 'react';

interface FooterItemProps {
  svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  label: string;
}

const FooterItem = ({ svg, label }: FooterItemProps) => {
  const SvgComponent = svg;

  return (
    <button className="flex h-full w-[20%] items-center justify-center lg:h-1/5 lg:max-h-28 lg:w-full">
      <div className="flex h-[90%] w-[80%] flex-col items-center justify-center rounded-xl hover:bg-grey-100 [&>div>*]:hover:stroke-primary [&>div]:hover:text-primary">
        <div className="flex h-[50%] w-full items-center justify-center overflow-y-hidden">
          <SvgComponent className="w-10 stroke-base-black " />
        </div>
        <div className="[25%] flex w-full justify-center">
          <span className="btm-nav-label">{label}</span>
        </div>
      </div>
    </button>
  );
};

export default FooterItem;
