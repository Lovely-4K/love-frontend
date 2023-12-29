// import DiaryContentProvider from '../../contexts/DiaryContent/DiaryContentContext';
// import ReadProvider from '../../contexts/DiaryContent/ReadContext';
import DiaryContentBody from './DiaryContentBody';

interface DiaryContentProps {
  mode: 'edit' | 'read';
}

const DiaryContent = ({ mode }: DiaryContentProps) => {
  return (
    // <DiaryContentProvider mode={mode}>
    <>
      {mode === 'edit' ? (
        <DiaryContentBody />
      ) : (
        // <ReadProvider>
        <DiaryContentBody />
        // </ReadProvider>
      )}
    </>
    // </DiaryContentProvider>
  );
};

export default DiaryContent;
