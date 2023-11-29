import styled from '@emotion/styled';
import { colors, fontSize } from '~/theme';
import { IconHeart } from '~/assets/icons';

const StyledB = styled.b`
  font-size: ${fontSize['5xl']};
  color: ${colors.base.white};
`;

const LoginTitle = () => {
  return (
    <div className="relative select-none space-y-3 text-center text-base-white">
      <h1 className="text-[1rem] text-base-white">
        <StyledB>우</StyledB>리<StyledB>이</StyledB>거<StyledB>삭</StyledB>
        제하지말자
      </h1>
      <h2>삭제하지 않기로 약속한 커플 다이어리</h2>
      <div className="absolute -top-9 right-10 h-14 w-12">
        <IconHeart className="absolute left-0 top-0 h-10 w-10 rotate-[20deg] stroke-base-white" />
        <IconHeart className="absolute bottom-1 right-1 h-5 w-5 rotate-[60deg] fill-base-white stroke-none" />
      </div>
    </div>
  );
};

export default LoginTitle;
