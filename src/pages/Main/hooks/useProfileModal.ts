import { useContext } from 'react';
import { ProfileModalContext } from '../contexts';

const useProfileModal = () => {
  const profileModalContext = useContext(ProfileModalContext);

  if (!profileModalContext) throw new Error('Cannot find ProfileModalProvider');

  return profileModalContext;
};

export default useProfileModal;
