import { PropsWithChildren } from 'react';
import { IconHeart } from '~/assets/icons';

const EmText = ({ children }: PropsWithChildren) => {
  return <span className="text-5xl text-base-white">{children}</span>;
};

const LoginTitle = () => {
  return (
    <div className="relative select-none space-y-3 text-center text-base-white">
      <h1 className="text-[1rem] text-base-white">
        <EmText>우</EmText>리<EmText>이</EmText>거<EmText>삭</EmText>제하지말자
      </h1>
      <h2>삭제하지 않기로 약속한 커플 다이어리</h2>
      <div className="absolute -top-14 right-8 h-14 w-12">
        <IconHeart className="absolute left-0 top-0 h-10 w-10 rotate-[20deg] stroke-base-white" />
        <IconHeart className="absolute bottom-1 right-1 h-5 w-5 rotate-[60deg] fill-base-white stroke-none" />
      </div>
    </div>
  );
};

export default LoginTitle;
