import {
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '~/hooks';
import { SETTING_TAB } from '../constants';

interface SettingContextProps {
  activeTab: keyof typeof SETTING_TAB;
  handleTabChange: (tab: keyof typeof SETTING_TAB) => void;
  handleLogout(): void;
}

const SettingContext = createContext<SettingContextProps | null>(null);

const SettingProvider = ({ children }: PropsWithChildren) => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof SETTING_TAB>('LOGOUT');
  const navigate = useNavigate();
  const { logout } = useLogin();

  const handleTabChange = useCallback((tab: keyof typeof SETTING_TAB) => {
    setActiveTab(tab);
  }, []);

  const handleLogout = useCallback(() => {
    logout();
    navigate('/login');
  }, [navigate]);

  const value = useMemo(
    () => ({
      activeTab,
      handleTabChange,
      handleLogout,
    }),
    [activeTab, handleTabChange, handleLogout],
  );

  return (
    <SettingContext.Provider value={value}>{children}</SettingContext.Provider>
  );
};

export { SettingContext, SettingProvider };
