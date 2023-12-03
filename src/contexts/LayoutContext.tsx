import { PropsWithChildren, createContext, useMemo } from 'react';
import { useGetCoupleProfile } from '~/services/couple';

interface LayoutContextProps {
  coupleMode: 'SOLO' | 'RELATIONSHIP' | 'BREAKUP' | 'RECOUPLE';
}

const LayoutContext = createContext<LayoutContextProps | null>(null);

const LayoutProvider = ({ children }: PropsWithChildren) => {
  const { data: coupleProfile } = useGetCoupleProfile();

  const coupleMode = useMemo(() => {
    return coupleProfile.coupleStatus;
  }, [coupleProfile]);

  const value = useMemo(() => ({ coupleMode }), [coupleMode]);

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export { LayoutContext, LayoutProvider };
