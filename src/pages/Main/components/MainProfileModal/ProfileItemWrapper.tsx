import { PropsWithChildren } from 'react';

interface ProfileItemProps extends PropsWithChildren {
  label?: string;
  title: string;
}

const ProfileItemWrapper = ({ label, title, children }: ProfileItemProps) => {
  return (
    <>
      <div className="flex items-center px-4">
        <label
          className="font-title mr-8 w-24 shrink-0 self-start font-bold"
          htmlFor={label}
        >
          {title}
        </label>
        {children}
      </div>
      <div className="my-3 h-[0.2rem] w-full bg-grey-100" />
    </>
  );
};
export default ProfileItemWrapper;
