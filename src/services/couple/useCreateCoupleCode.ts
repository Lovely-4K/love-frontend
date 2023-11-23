import { useMutation } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

const creteCoupleCode = async () => {
  const response = await apiClient.post('/couples/invitation-code');

  return response.data;
};

const useCreateCoupleCode = () => {
  return useMutation({
    mutationFn: creteCoupleCode,
  });
};

export default useCreateCoupleCode;
