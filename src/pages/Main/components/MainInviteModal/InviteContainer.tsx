import MainProfile from '~/pages/Main/components/MainProfile';

const InviteContainer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <span className="font-title text-base-black">
          정 님께서 초대하셨어요!
        </span>
        <MainProfile
          name="정"
          mbti="ISFJ"
          picture="https://source.unsplash.com/random/"
        />
      </div>
    </>
  );
};

export default InviteContainer;
