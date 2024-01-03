import { ChangeEvent, useState } from 'react';
import { useProfile } from '../../hooks';
import { Button } from '~/components/common';
import { Modal } from '~/components/domain';
import { useEditCoupleProfile, useGetCoupleProfile } from '~/services/couple';

const MainDdayModal = () => {
  const { data: coupleProfile } = useGetCoupleProfile();
  const [editDday, setEditDday] = useState(coupleProfile.meetDay);
  const { closeDdayModal, dDayModalRef } = useProfile();

  const handleDdayChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditDday(event.target.value);
  };

  return (
    <Modal
      ref={dDayModalRef}
      className="flex flex-col items-center gap-16 py-10"
    >
      <span className="text-xl text-base-black">
        연인이 된 날이 언제인가요?
      </span>
      <input
        className="text-xl text-base-black focus:outline-none"
        type="date"
        value={editDday}
        onChange={handleDdayChange}
      />
      <div className="flex w-full justify-center gap-2">
        <Button
          size="medium"
          onClick={closeDdayModal}
          className="border border-grey-300 bg-base-white text-grey-400 focus:outline-none"
        >
          취소
        </Button>
        <Button
          size="medium"
          onClick={closeDdayModal}
          className="bg-base-primary text-base-white focus:outline-none"
        >
          저장하기
        </Button>
      </div>
    </Modal>
  );
};

export default MainDdayModal;
