import { useState } from 'react';
import { IconCopyLink } from '~/assets/icons';
import { Button, Input } from '~/components/common';

const InviteContainer = () => {
  const [linkToggle, setLinkToggle] = useState(false);

  const handleClick = () => {
    setLinkToggle(true);
  };

  const linkContent = linkToggle && (
    <div className="join flex w-full rounded-lg border border-grey-200">
      <Input
        className="input join-item grow rounded-lg focus:outline-none"
        content="hello"
        readOnly
      />
      <Button className="btn join-item rounded-lg">
        <IconCopyLink className="h-7 w-7 fill-base-white" />
      </Button>
    </div>
  );

  return (
    <div className="mt-16 flex justify-center">
      <div className="flex max-w-[27rem] flex-col items-center justify-center gap-6 rounded-3xl border-grey-200 px-6 py-7 md:border">
        <span className="font-title break-keep">
          상대방을 초대하고 우이삭 컨텐츠를 이용해보세요!
        </span>
        {linkContent}
        <Button
          onClick={handleClick}
          className="btn-extra-large w-full rounded-xl bg-base-primary text-base-white"
        >
          초대 링크 발급하기
        </Button>
      </div>
    </div>
  );
};

export default InviteContainer;
