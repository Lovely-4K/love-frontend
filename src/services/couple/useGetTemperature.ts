import { useQuery } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

const getTemperature = async () => {
  const { data } = await apiClient.get('/couples/temperature');

  return data.body;
};

const useGetTemperature = () => {
  return useQuery({
    queryKey: ['temperature'],
    queryFn: getTemperature,
  });
};

export default useGetTemperature;
