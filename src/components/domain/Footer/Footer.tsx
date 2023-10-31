import FooterItem from './FooterItem';
import { IconHome, IconCalendar, IconDiary } from '~/assets/icons';

const Footer = () => {
  return (
    <div className="relative z-40 flex h-28 w-screen items-center justify-between bg-base-white lg:h-screen lg:w-28 lg:flex-col lg:justify-start">
      <FooterItem url={'/'} svg={IconHome} label={'홈'} />
      <FooterItem url={'/diary'} svg={IconCalendar} label={'다이어리'} />
      <FooterItem url={'/calendar'} svg={IconDiary} label={'캘린더'} />
      <FooterItem url={'/question'} svg={IconHome} label={'질문하기'} />
      <FooterItem url={'/setting'} svg={IconHome} label={'환경설정'} />
    </div>
  );
};

export default Footer;
