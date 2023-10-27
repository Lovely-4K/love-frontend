import { PropsWithChildren, memo } from 'react';

interface EditInputProps extends PropsWithChildren {
  label?: string;
  title: string;
}

const EditItemWrapper = memo(({ label, title, children }: EditInputProps) => {
  return (
    <>
      <div className="flex items-center px-4">
        <label
          className="font-title mr-8 w-24 shrink-0 font-bold"
          htmlFor={label}
        >
          {title}
        </label>
        {children}
      </div>
      <div className="my-3 h-[0.2rem] w-full bg-grey-100" />
    </>
  );
});

export default EditItemWrapper;
