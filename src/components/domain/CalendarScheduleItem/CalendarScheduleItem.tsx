import { colors } from '~/theme';

interface CalendarScheulItemProps {
  customColor: keyof typeof colors.personal;
  date: string;
  title: string;
}

const CalendarScheduleItem = ({
  customColor,
  date,
  title,
}: CalendarScheulItemProps) => {
  const { personal } = colors;

  return (
    <div
      className={`m-2 flex h-[4rem] w-[15.385rem] flex-shrink-0 flex-col items-center justify-center rounded-xl border border-solid bg-base-white px-5 py-2`}
      style={{ borderColor: personal[customColor] }}
    >
      <div className="font-small w-full text-grey-400">{date}</div>
      <div
        className={`font-medium w-full`}
        style={{ color: personal[customColor] }}
      >
        {title}
      </div>
    </div>
  );
};

export default CalendarScheduleItem;
