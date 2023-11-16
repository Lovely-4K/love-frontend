import { useQuery } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

interface GetMonthScheduleParams {
  from: Date;
  to: Date;
}

const getMonthSchedule = async ({ from, to }: GetMonthScheduleParams) => {
  const response = await apiClient.get(`/calendars?from=${from}&to=${to}`);

  return response.data.body;
};

const useGetMonthSchedule = ({ from, to }: GetMonthScheduleParams) => {
  return useQuery({
    queryKey: ['monthSchedule', from, to],
    queryFn: () => getMonthSchedule({ from, to }),
  });
};

export default useGetMonthSchedule;
