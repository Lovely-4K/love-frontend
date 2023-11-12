import type { CoupleProfile } from '~/types/couple';
import { PropsWithChildren, createContext } from 'react';
import useGetCoupleProfile from '../hooks/useGetCoupleProfile';

interface MainContextProps {
  coupleProfile: CoupleProfile;
  coupleMode: boolean;
}

const MainContext = createContext<MainContextProps | null>(null);

const MainProvider = ({ children }: PropsWithChildren) => {
  const getCoupleProfileQuery = useGetCoupleProfile();

  if (getCoupleProfileQuery.isLoading) {
    return <div>스켈레톤 UI...</div>;
  }

  if (getCoupleProfileQuery.isError) {
    return <div>에러 UI...</div>;
  }

  if (!getCoupleProfileQuery.isSuccess) return;

  const coupleMode = getCoupleProfileQuery.data.girlId !== null;

  return (
    <MainContext.Provider
      value={{
        coupleProfile: getCoupleProfileQuery.data,
        coupleMode,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
