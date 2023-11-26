import { scheduleColors } from '~/constants';
import { ColorInfo, Schedule } from '~/types';

const getScheduleColor = (schedule: Schedule, colorInfo: ColorInfo) => {
  const { scheduleType, ownerId } = schedule;
  const { myCalendarColor, myId, opponentCalendarColor } = colorInfo;

  if (scheduleType === 'PERSONAL') {
    return ownerId === myId ? myCalendarColor : opponentCalendarColor;
  }

  return scheduleColors[scheduleType];
};

export default getScheduleColor;
