import { useEffect, useState } from 'react';
import { IconCopyLink } from '~/assets/icons';
import { Button, Input } from '~/components/common';
import { useCreateCoupleCode } from '~/services/couple';
import useCreateCouple from '~/services/couple/useCreateCouple';

const InviteContainer = () => {
  const [coupleCode, setCoupleCode] = useState('' as string);
  const { mutate: createCoupleCode, data } = useCreateCoupleCode();
  const { mutate: createCouple } = useCreateCouple();

  useEffect(() => {
    createCoupleCode();
  }, [createCoupleCode]);

  const handleCopyButton = async () => {
    await window.navigator.clipboard.writeText(data.body.invitationCode);
  };

  const handleOnCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoupleCode(e.target.value);
  };

  const handleSubmitCode = () => {
    createCouple(coupleCode);
  };

  return (
    <div className="mb-5 flex justify-center md:mb-40">
      <div className="flex max-w-[27rem] flex-col items-center justify-center gap-6 rounded-3xl border border-grey-200 px-6 py-7">
        <span className="break-keep text-center text-lg">
          상대방을 초대하고 우이삭 컨텐츠를 이용해보세요!
        </span>
        <div className="flex w-full flex-col space-y-1 rounded-xl bg-grey-100 px-5 py-3">
          <span>내 초대 코드</span>
          <div className="join flex w-full">
            <Input
              className="input join-item grow rounded-l-xl border border-grey-200 text-sm focus:outline-none"
              value={data ? data.body.invitationCode : ''}
              readOnly
            />
            <Button className="btn join-item w-fit" onClick={handleCopyButton}>
              <IconCopyLink className="h-5 w-5 rounded-r-xl stroke-base-white" />
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col space-y-1 rounded-xl bg-grey-100 px-5 py-3">
          <span>받은 코드 입력</span>
          <Input
            shape="normal"
            placeholder="받은 초대 코드를 입력해주세요!"
            value={coupleCode}
            onChange={handleOnCodeChange}
            className="text-sm"
          />
        </div>
        <Button
          onClick={handleSubmitCode}
          className="btn-extra-large w-full rounded-xl bg-base-primary text-base-white disabled:bg-grey-300"
        >
          커플 등록하기
        </Button>
      </div>
    </div>
  );
};

export default InviteContainer;
