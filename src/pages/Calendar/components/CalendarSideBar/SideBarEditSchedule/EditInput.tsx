import { useAtomValue, useSetAtom } from 'jotai';
import { Input } from '~/components/common';
import {
  editScheduleInfoAtom,
  setEditScheduleInfoAtom,
} from '~/pages/Calendar/stores/calendarAtom';

const EditInput = () => {
  const editScheduleInfo = useAtomValue(editScheduleInfoAtom);
  const setEditScheduleInfo = useSetAtom(setEditScheduleInfoAtom);

  const { scheduleDetails } = editScheduleInfo;

  return (
    <Input
      shape="ghost"
      className="w-full bg-transparent focus:outline-none"
      placeholder="내용 입력"
      value={scheduleDetails}
      name="scheduleDetails"
      onChange={setEditScheduleInfo}
    />
  );
};

export default EditInput;
