import FooterItem from './FooterItem';
import { IconHome, IconCalendar, IconDiary } from '~/assets/icons';

const Footer = () => {
  return (
    <div className="flex h-28 w-screen items-center justify-between lg:h-screen lg:w-28 lg:flex-col lg:justify-start">
      <FooterItem svg={IconHome} label={'홈'} />
      <FooterItem svg={IconCalendar} label={'다이어리'} />
      <FooterItem svg={IconDiary} label={'캘린더'} />
      <FooterItem svg={IconHome} label={'홈'} />
      <FooterItem svg={IconHome} label={'홈'} />
    </div>
  );
};

export default Footer;
