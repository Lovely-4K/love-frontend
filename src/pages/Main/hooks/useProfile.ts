import { useContext } from 'react';
import { ProfileContext } from '../contexts';

const useProfile = () => {
  const profileContext = useContext(ProfileContext);

  if (!profileContext) throw new Error('Cannot find ProfileProvider');

  return profileContext;
};

export default useProfile;
