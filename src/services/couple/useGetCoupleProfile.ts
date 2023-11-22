import { useQuery } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';
import { CoupleProfile } from '~/types/couple';

const getCoupleProfile = async (): Promise<CoupleProfile> => {
  const response = await apiClient.get('/couples');

  return response.data.body;
};

const useGetCoupleProfile = () => {
  return useQuery({
    queryKey: ['coupleProfile'],
    queryFn: getCoupleProfile,
  });
};

export default useGetCoupleProfile;
