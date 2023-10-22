import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import colors from '~/theme/colors';

interface MessageBoxProps {
  text: string;
  direction?: 'left' | 'right';
}

const MessageWrapper = styled.div<{ direction: 'left' | 'right' }>`
  position: relative;
  background: white;
  border: 2px solid ${colors.grey[300]};
  border-radius: 10px;
  min-height: 5rem;
  min-width: 10rem;
  max-width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  &:after,
  &:before {
    top: 50%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(255, 255, 255, 0);
    border-width: 10px;
    margin-top: -10px;
    ${(props) =>
      props.direction === 'left' && `left: 100%; border-left-color: white;`}
    ${(props) =>
      props.direction === 'right' && `right: 100%; border-right-color: white;`}
  }

  &:before {
    border-color: rgba(0, 0, 0, 0);
    border-width: 13px;
    margin-top: -13px;
    ${(props) =>
      props.direction === 'left' &&
      `left: 100%; border-left-color: ${colors.grey[300]}`}
    ${(props) =>
      props.direction === 'right' &&
      `right: 100%; border-right-color: ${colors.grey[300]}`}
  }
`;

const MessageBox = ({ text, direction = 'left' }: MessageBoxProps) => {
  return (
    <Flex>
      <MessageWrapper direction={direction}>
        <div>{text}</div>
      </MessageWrapper>
    </Flex>
  );
};

export default MessageBox;
