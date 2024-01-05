import useDiaryForm from '../../hooks/DiaryContent/useDiaryForm';
import { Button } from '~/components/common';

const DiaryContentEditButton = () => {
  const { loading, editable, handleEditCancel, handleSubmitDiary } =
    useDiaryForm();

  return (
    editable && (
      <div className="flex justify-end gap-2">
        <Button
          onClick={handleEditCancel}
          disabled={loading}
          size="small"
          className="rounded-xl border border-grey-200 text-grey-400"
        >
          취소
        </Button>
        <Button
          onClick={handleSubmitDiary}
          disabled={loading}
          size="small"
          className="rounded-xl border bg-base-primary text-base-white disabled:bg-grey-300"
        >
          완료
        </Button>
      </div>
    )
  );
};

export default DiaryContentEditButton;
