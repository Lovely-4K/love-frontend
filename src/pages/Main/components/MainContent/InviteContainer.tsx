import { useState } from 'react';
import { IconCopyLink } from '~/assets/icons';
import { Button, Input } from '~/components/common';
import { useCreateCoupleCode } from '~/services/couple';

const InviteContainer = () => {
  const [linkToggle, setLinkToggle] = useState(false);
  const { mutate: createCoupleCode, data, isSuccess } = useCreateCoupleCode();

  const handleCodeButton = () => {
    createCoupleCode();
    setLinkToggle(true);
  };

  const handleCopyButton = async () => {
    await window.navigator.clipboard.writeText(data.body.invitationCode);
  };

  const linkContent = linkToggle && isSuccess && (
    <div className="join flex w-full">
      <Input
        className="input join-item grow rounded-l-xl border border-grey-200 text-sm focus:outline-none"
        value={data.body.invitationCode}
        readOnly
      />
      <Button className="btn join-item w-fit" onClick={handleCopyButton}>
        <IconCopyLink className="h-5 w-5 rounded-r-xl stroke-base-white" />
      </Button>
    </div>
  );

  return (
    <div className="flex justify-center">
      <div className="flex max-w-[27rem] flex-col items-center justify-center gap-6 rounded-3xl border border-grey-200 px-6 py-7">
        <span className="font-title break-keep text-center">
          상대방을 초대하고 우이삭 컨텐츠를 이용해보세요!
        </span>
        {linkContent}
        <Button
          disabled={isSuccess}
          onClick={handleCodeButton}
          className="btn-extra-large w-full rounded-xl bg-base-primary text-base-white disabled:bg-grey-300"
        >
          초대 링크 발급하기
        </Button>
      </div>
    </div>
  );
};

export default InviteContainer;
