import styled from '@emotion/styled';
import { CalendarScheduleItem } from '~/components/domain';

const MainPreviewCalendarContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  display: flex;
  scroll-behavior: smooth;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

const MainPreviewCalendar = () => {
  return (
    <MainPreviewCalendarContainer>
      <CalendarScheduleItem
        customColor={'blue'}
        date={'2023년 11월 06일'}
        title={'1차 데모'}
      />
      <CalendarScheduleItem
        customColor={'pink'}
        date={'2023년 11월 06일'}
        title={'1차 데모'}
      />
      <CalendarScheduleItem
        customColor={'purple'}
        date={'2023년 11월 06일'}
        title={'1차 데모'}
      />
      <CalendarScheduleItem
        customColor={'purple'}
        date={'2023년 11월 06일'}
        title={'1차 데모'}
      />
      <CalendarScheduleItem
        customColor={'purple'}
        date={'2023년 11월 06일'}
        title={'1차 데모'}
      />
      <CalendarScheduleItem
        customColor={'purple'}
        date={'2023년 11월 06일'}
        title={'1차 데모'}
      />
      <CalendarScheduleItem
        customColor={'purple'}
        date={'2023년 11월 06일'}
        title={'1차 데모'}
      />
    </MainPreviewCalendarContainer>
  );
};

export default MainPreviewCalendar;
