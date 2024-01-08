import { SettingContent, SettingTab } from './components';

const Setting = () => {
  return (
    <div className="h-full w-full px-8 py-7 lg:px-14">
      <h1 className="mb-6 text-xl lg:text-2xl">환경설정</h1>
      <SettingTab />
      <div className="absolute left-0 w-full -translate-y-[2px] border-b-2 border-grey-300" />
      <SettingContent />
    </div>
  );
};

export default Setting;
