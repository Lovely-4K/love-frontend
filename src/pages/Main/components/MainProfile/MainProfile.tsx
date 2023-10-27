import { memo } from 'react';

interface MainProfileProps {
  name: string;
  mbti: string;
  picture: string;
}

const MainProfile = memo(({ name, mbti, picture }: MainProfileProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="avatar">
        <div className="avatar-extra-large rounded-full">
          <img src={picture} />
        </div>
      </div>
      <span className="font-title font-bold">{name}</span>
      <span className="font-medium text-grey-500">{mbti}</span>
    </div>
  );
});

export default MainProfile;
