import { Avatar } from '~/components/common';
import { Modal } from '~/components/domain';

const MainInviteModal = () => {
  return (
    <>
      <Modal className="flex flex-col gap-10 py-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <span className="font-title text-base-black">
            정 님께서 초대하셨어요!
          </span>
          <Avatar size="medium" src="https://source.unsplash.com/random/" />
        </div>
        <div className="flex justify-center gap-2">
          <button className="btn-medium btn w-full rounded-xl border-grey-300 bg-base-white text-grey-400 focus:outline-none">
            취소
          </button>
          <button className="btn-medium btn w-full rounded-xl border bg-base-primary text-base-white focus:outline-none">
            수락하기
          </button>
        </div>
      </Modal>
    </>
  );
};

export default MainInviteModal;
