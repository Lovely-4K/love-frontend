import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import { Button } from '~/components/common';
const DiaryContentEditButton = () => {
  const { editable, methods } = useDiaryContentContext();
  const { handleEditCancel, handleSubmitForm } = methods;

  return (
    editable && (
      <div className="flex justify-end gap-2">
        <Button
          onClick={handleEditCancel}
          size="small"
          className="rounded-xl border border-grey-200 text-grey-400"
        >
          취소
        </Button>
        <Button
          type="submit"
          onClick={handleSubmitForm}
          size="small"
          className="rounded-xl border bg-base-primary text-base-white"
        >
          완료
        </Button>
      </div>
    )
  );
};

export default DiaryContentEditButton;
