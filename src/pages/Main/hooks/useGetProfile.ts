import { useQuery } from '@tanstack/react-query';
import { User } from '~/types';
import apiClient from '~/api/apiClient';

const getProfile = async (userId: number): Promise<User> => {
  const response = await apiClient.get(`/members?memberId=${userId}`);

  return response.data.body;
};

const useGetProfile = ({ userId }: { userId: number }) => {
  return useQuery({
    queryKey: ['profile', userId],
    queryFn: () => getProfile(userId),
  });
};

export default useGetProfile;
