import DiaryContentBody from './DiaryContentBody';
import { DiaryContentProvider } from '~/pages/Diary/contexts/DiaryContentContext';

interface DiaryContentProps {
  mode: 'create' | 'edit' | 'read';
}

const DiaryContent = ({ mode }: DiaryContentProps) => {
  return (
    <DiaryContentProvider mode={mode}>
      <DiaryContentBody />
    </DiaryContentProvider>
  );
};

export default DiaryContent;
