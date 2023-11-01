import { TemperatureBar } from '..';
import FooterItem from './FooterItem';
import {
  IconHome,
  IconCalendar,
  IconDiary,
  IconSetting,
  IconQuestion,
} from '~/assets/icons';

const Footer = () => {
  return (
    <div className="fixed z-40 flex h-24 w-screen flex-col-reverse lg:h-screen lg:w-28 lg:flex-row">
      <div className="flex items-center justify-around bg-base-white lg:flex-col lg:justify-start lg:gap-3 lg:p-3">
        <FooterItem url={'/'} svg={IconHome} label={'홈'} />
        <FooterItem url={'/diary'} svg={IconDiary} label={'다이어리'} />
        <FooterItem url={'/calendar'} svg={IconCalendar} label={'캘린더'} />
        <FooterItem url={'/question'} svg={IconQuestion} label={'질문하기'} />
        <FooterItem url={'/setting'} svg={IconSetting} label={'환경설정'} />
      </div>
      <TemperatureBar percent={100} />
    </div>
  );
};

export default Footer;
