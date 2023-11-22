import { scheduleColors } from '~/constants';
import { ColorInfo, Schedule } from '~/types';

const getScheduleColor = (schedule: Schedule, colorInfo: ColorInfo) => {
  const { scheduleType, ownerId } = schedule;
  const { boyCalendarColor, boyId, girlCalendarColor } = colorInfo;
  if (scheduleType === 'PERSONAL') {
    if (ownerId === boyId) return boyCalendarColor;

    return girlCalendarColor;
  }

  return scheduleColors[scheduleType];
};

export default getScheduleColor;
