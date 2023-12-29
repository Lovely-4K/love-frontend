import { format } from 'date-fns';
import { Schedule } from '~/types';

interface GetDaySchedulesProps {
  schedules: Schedule[];
  date: string | Date;
}

const getDaySchedules = ({
  schedules,
  date,
}: GetDaySchedulesProps): Schedule[] => {
  const formatDate = format(new Date(date), 'yyyy-MM-dd');

  return schedules.filter(
    (schedule) =>
      schedule.startDate <= formatDate && schedule.endDate >= formatDate,
  );
};

export default getDaySchedules;
