import type { CoupleProfile } from '~/types/couple';
import { PropsWithChildren, createContext, useMemo } from 'react';
import { useGetCoupleProfile } from '~/services/couple';

interface MainContextProps {
  coupleProfile: CoupleProfile;
}

const MainContext = createContext<MainContextProps | null>(null);

const MainProvider = ({ children }: PropsWithChildren) => {
  const getCoupleProfileQuery = useGetCoupleProfile();

  const value = useMemo(() => {
    return {
      coupleProfile: getCoupleProfileQuery.data,
    };
  }, [getCoupleProfileQuery]);

  if (!getCoupleProfileQuery.isSuccess) return null;

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export { MainContext, MainProvider };
