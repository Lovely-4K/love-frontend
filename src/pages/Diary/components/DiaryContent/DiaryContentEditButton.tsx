import { useAtomValue } from 'jotai';
import { Button } from '~/components/common';
import useDiaryContents from '~/pages/Diary/hooks/DiaryContent/useDiaryContents';
import { editableAtom, loadingAtom } from '~/stores/diaryContentAtoms';
const DiaryContentEditButton = () => {
  const editable = useAtomValue(editableAtom);
  const loading = useAtomValue(loadingAtom);
  const { handleEditCancel, handleSubmitForm } = useDiaryContents();

  return (
    editable && (
      <div className="flex justify-end gap-2">
        <Button
          onClick={() => {
            handleEditCancel();
          }}
          disabled={loading}
          size="small"
          className="rounded-xl border border-grey-200 text-grey-400"
        >
          취소
        </Button>
        <Button
          onClick={() => {
            handleSubmitForm();
          }}
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
