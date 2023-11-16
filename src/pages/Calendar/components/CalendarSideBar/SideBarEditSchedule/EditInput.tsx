import { Input } from '~/components/common';
import { useCalendarSideBar } from '~/pages/Calendar/hooks';

const EditInput = () => {
  const { scheduleInfo, handleEditInput } = useCalendarSideBar();

  const { scheduleDetails } = scheduleInfo;

  return (
    <Input
      shape="ghost"
      className="w-full"
      placeholder="내용 입력"
      value={scheduleDetails}
      name="scheduleDetails"
      onChange={handleEditInput}
    />
  );
};

export default EditInput;
