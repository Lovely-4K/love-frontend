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
`;

const MainPreviews = () => {
  return (
    <MainPreviewContainer className="md:max-w-5xl md:flex-row md:justify-center">
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
