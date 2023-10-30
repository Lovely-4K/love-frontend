import styled from '@emotion/styled';
import { DiaryPreviewItem } from '~/components/domain';

const MainPreviewDiaryContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  overflow-x: scroll;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

const MainPreviewDiary = () => {
  // todo 다이어리 클릭시 해당 페이지로 이동할 수 있도록 Link 추가해야함
  return (
    <MainPreviewDiaryContainer>
      <DiaryPreviewItem
        date={'2023월 09월 05일'}
        location={'카페 녹다'}
        imgSrc={'https://picsum.photos/200'}
      />
      <DiaryPreviewItem
        date={'2023월 09월 05일'}
        location={'카페 녹다'}
        imgSrc={'https://picsum.photos/200'}
      />
      <DiaryPreviewItem
        date={'2023월 09월 05일'}
        location={'카페 녹다'}
        imgSrc={'https://picsum.photos/200'}
      />
      <DiaryPreviewItem
        date={'2023월 09월 05일'}
        location={'카페 녹다'}
        imgSrc={'https://picsum.photos/200'}
      />
      <DiaryPreviewItem
        date={'2023월 09월 05일'}
        location={'카페 녹다'}
        imgSrc={'https://picsum.photos/200'}
      />
      <DiaryPreviewItem
        date={'2023월 09월 05일'}
        location={'카페 녹다'}
        imgSrc={'https://picsum.photos/200'}
      />
      <DiaryPreviewItem
        date={'2023월 09월 05일'}
        location={'카페 녹다'}
        imgSrc={'https://picsum.photos/200'}
      />
    </MainPreviewDiaryContainer>
  );
};

export default MainPreviewDiary;
