import styled from '@emotion/styled';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { colors, fontSize, screens } from '~/theme';
import SideBarFallBack from './SideBarFallback';
import { IconTopArrow } from '~/assets/icons';
import { Loading } from '~/components/common';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

const StyledDiarySideBar = styled.div`
  position: absolute;
  bottom: 6rem;
  z-index: 30;
  display: flex;
  height: 23rem;
  width: 100%;
  justify-content: center;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  background-color: ${colors.base.white};
  padding: 1.75rem;
  box-shadow: 0 -0.08rem 0.08rem 0 rgba(0, 0, 0, 0.25);
  transition: all 300ms;

  &.open {
    transform: translateY(0);
  }

  &.closed {
    transform: translateY(100%);
    height: 0px;
  }

  @media (min-width: ${screens.lg}) {
    bottom: 0;
    left: 7rem;
    height: 100vh;
    width: 23rem;
    border-top-right-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    box-shadow: 0.08rem 0.08rem 0.08rem 0 rgba(0, 0, 0, 0.25);

    &.open {
      transform: translateX(0) translateY(0);
    }

    &.closed {
      transform: translateX(-98%) translateY(0);
      height: 100vh;
    }
  }
`;

const StyledToggleButton = styled.button`
  position: absolute;
  bottom: 100%;
  display: flex;
  height: 1.75rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  border: 2px solid #cfd8dc;
  border-bottom: 0px;
  background-color: #ffffff;
  font-size: ${fontSize.xl};
  color: #000000;

  @media (min-width: ${screens.lg}) {
    top: 50%;
    height: 2.5rem;
    width: 1.75rem;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    border-bottom: 2px solid #cfd8dc;
    border-left-width: 0px;
    left: 100%;
  }
`;

const StyledArrowIcon = styled(IconTopArrow)`
  height: 1rem;
  width: 1rem;
  fill: #bdbdbd;

  &.open {
    transform: rotate(180deg);

    @media (min-width: ${screens.lg}) {
      transform: rotate(270deg);
    }
  }

  &.closed {
    @media (min-width: ${screens.lg}) {
      transform: rotate(90deg);
    }
  }
`;

const DiarySideBar = ({ children }: PropsWithChildren) => {
  // const { sideBarToggle, toggleSideBar } = useSideBar();
  const { methods, sideBarToggle } = useDiary();
  const { toggleSideBar } = methods.handleSideBar;

  return (
    <StyledDiarySideBar className={sideBarToggle ? 'open' : 'closed'}>
      <StyledToggleButton onClick={toggleSideBar}>
        <StyledArrowIcon className={sideBarToggle ? 'open' : 'closed'} />
      </StyledToggleButton>
      <ErrorBoundary FallbackComponent={SideBarFallBack}>
        <React.Suspense fallback={<Loading size="large" />}>
          {children}
        </React.Suspense>
      </ErrorBoundary>
    </StyledDiarySideBar>
  );
};

export default DiarySideBar;
