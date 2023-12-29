import {
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import { atom } from 'jotai';
import { Schedule } from '~/types';

export const activeScheduleEditAtom = atom(false);

export const pickedDateAtom = atom(new Date());

export const changePickedDateAtom = atom(null, (_, set, date: Date) => {
  set(pickedDateAtom, date);
  set(activeScheduleEditAtom, false);
});

pickedDateAtom.onMount = (set) => {
  set(new Date());
};

export const formatPickedDateAtom = atom((get) =>
  format(get(pickedDateAtom), 'yyyy-MM-dd'),
);

export const currentMonthRangeAtom = atom((get) => {
  const startDate = format(
    startOfWeek(startOfMonth(get(pickedDateAtom))),
    'yyyy-MM-dd',
  );
  const endDate = format(
    endOfWeek(endOfMonth(get(pickedDateAtom))),
    'yyyy-MM-dd',
  );

  return {
    from: startDate,
    to: endDate,
  };
});

export const editScheduleInfoAtom = atom<Omit<Schedule, 'ownerId'>>({
  startDate: '',
  endDate: '',
  scheduleDetails: '',
  scheduleType: 'PERSONAL',
  calendarId: -1,
});

export const setEditScheduleInfoAtom = atom(
  null,
  (_, set, event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const key = name === 'ownerType' ? 'scheduleType' : name;
    const editValue = value === 'COUPLE' ? 'DATE' : value;

    set(editScheduleInfoAtom, (prev) => ({
      ...prev,
      [key]: editValue,
    }));
  },
);

export const openScheduleEditAtom = atom(
  null,
  (get, set, schedule: Schedule | void) => {
    if (schedule) {
      set(editScheduleInfoAtom, {
        startDate: schedule.startDate,
        endDate: schedule.endDate,
        scheduleDetails: schedule.scheduleDetails,
        scheduleType: schedule.scheduleType,
        calendarId: schedule.calendarId,
      });
    } else {
      set(editScheduleInfoAtom, {
        startDate: get(formatPickedDateAtom),
        endDate: get(formatPickedDateAtom),
        scheduleDetails: '',
        scheduleType: 'PERSONAL',
        calendarId: -1,
      });
    }
    set(activeScheduleEditAtom, true);
  },
);

export const closeScheduleEditAtom = atom(null, (_, set) => {
  set(activeScheduleEditAtom, false);
});
