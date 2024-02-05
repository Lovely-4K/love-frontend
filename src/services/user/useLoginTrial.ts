import { useQuery } from '@tanstack/react-query';
import { TrialUser } from '~/types';
import apiClient from '~/api/apiClient';

const loginTrial = async (): Promise<TrialUser> => {
  const response = await apiClient.get('members/trial');

  return response.data.body;
};

const useLoginTrial = () => {
  return useQuery({
    queryKey: ['loginTrial'],
    queryFn: loginTrial,
  });
};

export default useLoginTrial;
