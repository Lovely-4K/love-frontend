import styled from '@emotion/styled';
import { IconHeart } from '~/assets/icons';
import colors from '~/theme/colors';

interface TemperatureBarProps {
  percent: number;
  horizontal?: boolean;
}

const StyledBar = styled.div<{ horizontal?: boolean; percent: number }>`
  background-color: ${colors.grey[100]};
  width: ${(props) => (props.horizontal ? '100%' : '1rem')};
  height: ${(props) => (props.horizontal ? '1rem' : '100vh')};
  ${(props) => !props.horizontal && `max-height: 100vh;`}
  display: flex;
  flex-direction: column-reverse;
  position: relative;
`;

const ColoredBar = styled.div<{ horizontal?: boolean; percent: number }>`
  width: ${(props) => (props.horizontal ? props.percent + '%' : '1rem')};
  height: ${(props) => (props.horizontal ? '1rem' : props.percent + '%')};
  background-color: ${colors.primary};
  position: relative;
`;

const IconHeartWrapper = styled.div<{ horizontal?: boolean }>`
  position: absolute;
  right: ${(props) => (props.horizontal ? '-15px' : '-7px')};
  top: ${(props) => (props.horizontal ? '-7px' : '-15px')};
`;

const TemperatureBar = ({
  percent = 10,
  horizontal = false,
}: TemperatureBarProps) => {
  return (
    <>
      <StyledBar horizontal={horizontal} percent={percent}>
        <ColoredBar horizontal={horizontal} percent={percent}>
          <IconHeartWrapper horizontal={horizontal}>
            <IconHeart
              width={30}
              height={30}
              fill={colors.primary}
              stroke={colors.primary}
            />
          </IconHeartWrapper>
        </ColoredBar>
      </StyledBar>
    </>
  );
};

export default TemperatureBar;
