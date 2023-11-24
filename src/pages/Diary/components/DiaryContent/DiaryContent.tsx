import * as React from 'react';
import DiaryContentProvider from '../../contexts/DiaryContent/DiaryContentContext';
import ReadProvider from '../../contexts/DiaryContent/ReadContext';
import DiaryContentBody from './DiaryContentBody';
import { Loading } from '~/components/common';

interface DiaryContentProps {
  mode: 'edit' | 'read';
}

const DiaryContent = ({ mode }: DiaryContentProps) => {
  return (
    <DiaryContentProvider mode={mode}>
      {mode === 'edit' ? (
        <DiaryContentBody />
      ) : (
        <React.Suspense fallback={<Loading />}>
          <ReadProvider>
            <DiaryContentBody />
          </ReadProvider>
        </React.Suspense>
      )}
    </DiaryContentProvider>
  );
};

export default DiaryContent;
