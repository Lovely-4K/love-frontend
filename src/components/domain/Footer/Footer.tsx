import { paths } from '~/router';
import TemperatureBar from '../TemperatureBar/TemperatureBar';
import FooterItem from './FooterItem';
import {
  IconHome,
  IconCalendar,
  IconDiary,
  IconSetting,
  IconQuestion,
} from '~/assets/icons';

const Footer = () => {
  const { MAIN, DIARY, CALENDAR, QUESTION, SETTING } = paths;

  return (
    <div className="fixed z-40 flex w-screen flex-col-reverse lg:h-screen lg:w-28 lg:flex-row">
      <div className="flex items-center justify-around bg-base-white p-1 lg:flex-col lg:justify-start lg:gap-3 lg:p-3">
        <FooterItem url={MAIN} svg={IconHome} label={'홈'} />
        <FooterItem url={DIARY.ROOT} svg={IconDiary} label={'다이어리'} />
        <FooterItem url={CALENDAR} svg={IconCalendar} label={'캘린더'} />
        <FooterItem url={QUESTION} svg={IconQuestion} label={'질문하기'} />
        <FooterItem url={SETTING} svg={IconSetting} label={'환경설정'} />
      </div>
      <TemperatureBar percent={1} />
    </div>
  );
};

export default Footer;
