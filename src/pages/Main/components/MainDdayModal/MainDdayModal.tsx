import { forwardRef } from 'react';
import { useMain } from '../../hooks';
import { Modal } from '~/components/domain';

interface MainDdayModalProps {
  closeModal: () => void;
}

const MainDdayModal = forwardRef<HTMLDialogElement, MainDdayModalProps>(
  ({ closeModal }, ref) => {
    const { editDday, handleEditDday, handleEditCoupleProfile } = useMain();

    return (
      <Modal ref={ref} className="flex flex-col items-center gap-16 py-10">
        <span className="font-title text-base-black">
          연인이 된 날이 언제인가요?
        </span>
        <input
          className="font-title text-base-black focus:outline-none"
          type="date"
          value={editDday || ''}
          onChange={handleEditDday}
        />
        <div className="flex w-full justify-center gap-2">
          <button
            onClick={closeModal}
            className="btn-medium btn w-full rounded-xl border-grey-300 bg-base-white text-grey-400 focus:outline-none"
          >
            취소
          </button>
          <button
            onClick={handleEditCoupleProfile}
            className="btn-medium btn w-full rounded-xl border bg-base-primary text-base-white focus:outline-none"
          >
            저장하기
          </button>
        </div>
      </Modal>
    );
  },
);

export default MainDdayModal;
