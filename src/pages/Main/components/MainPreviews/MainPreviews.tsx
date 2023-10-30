import styled from '@emotion/styled';
import MainPreviewCalendar from './MainPreviewCalendar';
import MainPreviewDiary from './MainPreviewDiary';
import MainPreviewItem from './MainPreviewItem';
import MainPreivewQuestion from './MainPreviewQuestion';

const MainPreviewContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    max-width: 64rem;
    flex-direction: row;
    justify-content: center;
  }
`;

const MainPreviews = () => {
  return (
    <MainPreviewContainer>
      <MainPreviewItem
        pageLink={'/calendar'}
        title={'다가오는 일정 →'}
        content={<MainPreviewCalendar />}
      />
      <MainPreviewItem
        pageLink={'/diary'}
        title={'우리의 추억들 →'}
        content={<MainPreviewDiary />}
      />
      <MainPreviewItem
        pageLink={'/qeustion'}
        title={'오늘의 질문 →'}
        content={<MainPreivewQuestion />}
      />
    </MainPreviewContainer>
  );
};

export default MainPreviews;
