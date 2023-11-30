import { useContext } from 'react';
import { SettingContext } from '../contexts';

const useSetting = () => {
  const settingContext = useContext(SettingContext);

  if (!settingContext) throw new Error('Cannot find SettingProvider');

  return settingContext;
};

export default useSetting;
