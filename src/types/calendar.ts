type ScheduleType = 'TRAVEL' | 'DATE' | 'ANNIVERSARY' | 'PERSONAL' | 'ETC';

interface Schedule {
  calendarId: number;
  startDate: string;
  endDate: string;
  scheduleDetails: string;
  scheduleType: ScheduleType;
  ownerId: number;
}

interface ColorInfo {
  boyId: number;
  boyCalendarColor: string;
  girlId: number;
  girlCalendarColor: string;
}

interface CalendarSchedule {
  colorInfo: ColorInfo;
  schedules: Schedule[];
}

type EditSchedule = Omit<Schedule, 'calendarId' | 'ownerId'>;

export type { CalendarSchedule, Schedule, ColorInfo, EditSchedule };
