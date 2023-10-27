import type { ProfileItemProps } from './ProfileItemType';
import BirthdayDropdown from './BirthdayDropdown';
import EditItemWrapper from './ProfileItemWrapper';

const ProfileBirthdayItem = ({
  activeEdit,
  userInfo,
  setUserInfo,
}: ProfileItemProps) => {
  const currentTime = new Date();

  const [year, month, day] = userInfo.birthday.split('-');

  const years = Array.from(
    { length: currentTime.getFullYear() - 1949 },
    (_, index) => index + 1950,
  );
  const months = Array.from({ length: 12 }, (_, index) => index + 1);
  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  const handleDateClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const { id } = event.currentTarget.closest('ul') as HTMLUListElement;
    const { value } = event.currentTarget;

    let newDate = '';

    if (id === 'year') {
      newDate = `${value}-${month}-${day}`;
    }

    if (id === 'month') {
      newDate = `${year}-${value}-${day}`;
    }

    if (id === 'day') {
      newDate = `${year}-${month}-${value}`;
    }

    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      birthday: newDate,
    }));
  };

  return (
    <EditItemWrapper label="birthday" title="생일">
      {activeEdit ? (
        <>
          <BirthdayDropdown
            dropDownList={years}
            value={year}
            id="year"
            onClick={handleDateClick}
          />
          <BirthdayDropdown
            dropDownList={months}
            value={month}
            id="month"
            onClick={handleDateClick}
          />
          <BirthdayDropdown
            dropDownList={days}
            value={day}
            id="day"
            onClick={handleDateClick}
          />
        </>
      ) : (
        <>
          <span className="mx-1">{year} 년</span>
          <span className="mx-1">{month} 월</span>
          <span className="mx-1">{day} 일</span>
        </>
      )}
    </EditItemWrapper>
  );
};

export default ProfileBirthdayItem;
