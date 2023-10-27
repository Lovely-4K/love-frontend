interface BirthdayDropdownProps {
  value: string;
  id: string;
  dropDownList: number[];
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const BirthdayDropdown = ({
  value,
  id,
  dropDownList,
  onClick,
}: BirthdayDropdownProps) => {
  const title = id === 'year' ? '년' : id === 'month' ? '월' : '일';

  return (
    <>
      <div className="dropdown">
        <label tabIndex={0} className="m-1">
          {value + ' ' + title}
        </label>
        <ul
          tabIndex={0}
          id={id}
          className="dropdown-content z-[1] flex h-28 flex-col overflow-y-scroll rounded-lg bg-base-100 p-2 shadow"
        >
          {dropDownList.map((item) => (
            <li className="w-full" key={item} value={item} onClick={onClick}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BirthdayDropdown;
