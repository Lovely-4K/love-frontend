import { useQuery } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';
import { CoupleProfile } from '~/types/couple';

const getCoupleProfile = async () => {
  const response = await apiClient.get(
    'http://43.201.122.97/v1/couples?memberId=1',
  );

  return response.data.body;
};

const useGetCoupleProfile = () => {
  return useQuery<CoupleProfile>({
    queryKey: ['coupleProfile'],
    queryFn: getCoupleProfile,
  });
};

export default useGetCoupleProfile;
