import { useState } from 'react';
import { IconCopyLink } from '~/assets/icons';
import MainProfile from '~/pages/Main/components/MainProfile';

const MainSolo = () => {
  const [linkToggle, setLinkToggle] = useState(false);

  const handleClick = () => {
    setLinkToggle(true);
  };

  const linkContent = linkToggle && (
    <div className="join flex w-full border border-grey-200">
      <input
        className="input join-item grow focus:outline-none"
        placeholder="초대 링크를 발급받으세요!"
        content="hello"
        readOnly
      ></input>
      <button className="btn join-item">
        <IconCopyLink className="h-7 w-7" />
      </button>
    </div>
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-14 px-4 pt-20">
        <MainProfile
          name="정"
          mbti="ISFJ"
          picture="https://source.unsplash.com/random/"
        />
        <div className="flex min-w-[21rem] max-w-[27rem] flex-col items-center justify-center gap-6 rounded-3xl border border-grey-200 px-6 py-7">
          <span className="font-title break-keep">
            상대방을 초대하고 우이삭 컨텐츠를 이용해보세요!
          </span>
          {linkContent}
          <button
            onClick={handleClick}
            className="btn-extra-large w-full rounded-xl bg-base-primary text-base-white"
          >
            초대 링크 발급하기
          </button>
        </div>
      </div>
    </>
  );
};

export default MainSolo;
