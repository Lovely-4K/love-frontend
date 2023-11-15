import styled from '@emotion/styled';
import { colors, screens } from '~/theme';

const StyledBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1.25rem;
  border-radius: 0.75rem;
  padding: 1rem 0;
  font-size: 0.875rem;
  background-color: #575757;
  color: ${colors.base.white};
`;

const StyledDivider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  height: 1rem;
  white-space: nowrap;
  padding: 1rem 0;
  @media (min-width: ${screens.lg}) {
    padding: 1.25rem 0;
  }

  &:before,
  &:after {
    content: '';
    flex-grow: 1;
    width: 100%;
    height: 0.125rem;
    background-color: ${colors.grey[200]};
  }
`;

const SideBarEditSchedule = () => {
  /** @todo nickname에 따라 label content 변경 */
  return (
    <div>
      <input className="input input-ghost h-5 w-full" placeholder="내용 입력" />
      <StyledDivider />
      <div>
        <div className="flex justify-between gap-2 px-4">
          <div>
            <div>시작</div>
            <input
              className="input input-ghost h-5 w-full p-0"
              type="date"
              value={'2023-11-01'}
            />
          </div>
          <div>
            <div>종료</div>
            <input
              className="input input-ghost h-5 w-full p-0"
              type="date"
              value={'2023-11-01'}
            />
          </div>
        </div>
      </div>
      <StyledDivider />
      <div className="px-4 pb-3">누구의 일정인가요?</div>
      <div className="flex w-full gap-2 px-4">
        <StyledBadge>정</StyledBadge>
        <StyledBadge>호</StyledBadge>
        <StyledBadge>함께</StyledBadge>
      </div>
      <StyledDivider />
      <div className="px-4 pb-3">어떤 것을 함께하나요?</div>
      <div className="flex w-full gap-2 px-4">
        <StyledBadge>데이트</StyledBadge>
        <StyledBadge>기념일</StyledBadge>
        <StyledBadge>여행</StyledBadge>
        <StyledBadge>기타</StyledBadge>
      </div>
      <StyledDivider />
      <div className="flex justify-end gap-2 px-2">
        <button className="btn-small w-full rounded-lg border border-grey-200 bg-base-white">
          취소
        </button>
        <button className="btn-small w-full rounded-lg bg-base-primary text-base-white">
          저장
        </button>
      </div>
    </div>
  );
};

export default SideBarEditSchedule;
