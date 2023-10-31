import styled from '@emotion/styled';
import MainPreviewCalendar from './MainPreviewCalendar';
import MainPreviewDiary from './MainPreviewDiary';
import MainPreviewItem from './MainPreviewItem';
import MainPreviewQuestion from './MainPreviewQuestion';

const MainPreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  @media screen and (min-width: 768px) {
    padding-right: 1rem;
    padding-left: 1rem;
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
        pageLink={'/question'}
        title={'오늘의 질문 →'}
        content={<MainPreviewQuestion />}
      />
    </MainPreviewContainer>
  );
};

export default MainPreviews;
