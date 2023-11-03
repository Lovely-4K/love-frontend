import { useQuery } from '@tanstack/react-query';
import { User } from '~/types';
import apiClient from '~/api/apiClient';

const getProfile = async () => {
  const response = await apiClient.get('/members?memberId=1');

  return response.data.body;
};

const useGetProfile = () => {
  return useQuery<User>({
    queryKey: ['profile'],
    queryFn: getProfile,
  });
};

export default useGetProfile;
