import type { CoupleProfile } from '~/types/couple';
import { PropsWithChildren, createContext, useMemo } from 'react';
import { useGetCoupleProfile } from '~/services/couple';

interface MainContextProps {
  coupleProfile: CoupleProfile;
  coupleMode: boolean;
}

const MainContext = createContext<MainContextProps | null>(null);

const MainProvider = ({ children }: PropsWithChildren) => {
  const getCoupleProfileQuery = useGetCoupleProfile();

  const coupleMode = useMemo(() => {
    if (!getCoupleProfileQuery.isSuccess) return false;

    return getCoupleProfileQuery.data.opponentId !== null;
  }, [getCoupleProfileQuery]);

  const value = useMemo(() => {
    if (!getCoupleProfileQuery.isSuccess) return null;

    return {
      coupleProfile: getCoupleProfileQuery.data,
      coupleMode,
    };
  }, [getCoupleProfileQuery, coupleMode]);

  if (!getCoupleProfileQuery.isSuccess) return null;

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export { MainContext, MainProvider };
