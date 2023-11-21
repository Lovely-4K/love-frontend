import type { CoupleProfile } from '~/types/couple';
import { PropsWithChildren, createContext, useMemo } from 'react';
import { useGetCoupleProfile } from '~/hooks/couple';

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
    // return false;
  }, [getCoupleProfileQuery]);

  if (getCoupleProfileQuery.isLoading) {
    return <div>스켈레톤 UI...</div>;
  }

  if (getCoupleProfileQuery.isError) {
    return <div>에러 UI...</div>;
  }

  if (!getCoupleProfileQuery.isSuccess) return;

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
