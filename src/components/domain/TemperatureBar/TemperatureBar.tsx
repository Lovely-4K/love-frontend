import styled from '@emotion/styled';
import { colors, screens } from '~/theme';
import { IconHeart } from '~/assets/icons';

interface TemperatureBarProps {
  percent: number;
}

const ActiveTempBar = styled.div<TemperatureBarProps>`
  position: relative;
  background-color: ${colors.base.primary};
  height: 0.7rem;
  width: ${({ percent }) =>
    percent >= 97.5 ? 97.5 : percent <= 2.5 ? 2.5 : percent}%;

  @media screen and (min-width: ${screens.md}) {
    width: ${({ percent }) =>
      percent >= 98.5 ? 98.5 : percent <= 1.5 ? 1.5 : percent}%;
  }

  @media screen and (min-width: ${screens.lg}) {
    height: ${({ percent }) =>
      percent >= 99 ? 99 : percent <= 2 ? 2 : percent}%;
    width: 1rem;
  }
`;

const ActiveIcon = styled(IconHeart)<TemperatureBarProps>`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -25%);
  height: 1.5rem;
  width: 1.5rem;
  fill: ${colors.base.primary};
  stroke: ${colors.base.primary};

  @media screen and (min-width: ${screens.lg}) {
    height: 2.5rem;
    width: 2.5rem;
    transform: translate(30%, -35%);
  }
`;

const TemperatureBar = ({ percent = 0 }: TemperatureBarProps) => {
  return (
    <div className="flex h-full w-full flex-col-reverse bg-grey-100">
      <ActiveTempBar percent={percent}>
        <ActiveIcon percent={percent} />
      </ActiveTempBar>
    </div>
  );
};

export default TemperatureBar;
