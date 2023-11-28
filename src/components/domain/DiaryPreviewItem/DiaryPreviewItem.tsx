import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';
import { colors, fontSize, screens } from '~/theme';
import { Img } from '~/components/common';

interface DiaryPreviewItemProps extends HTMLAttributes<HTMLDivElement> {
  date: string;
  location: string;
  imgSrc: string;
}

const DiaryPreviewItemContainer = styled.div`
  position: relative;
  display: flex;
  min-width: 7rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;

  @media (min-width: ${screens.md}) {
    min-width: 9rem;
  }

  &:hover {
    & > div {
      visibility: visible;
    }
  }
`;

const PreviewTextItemContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  visibility: hidden;
  border-radius: 0.75rem;
  background-color: ${colors.base.deem};
  font-size: ${fontSize.sm};
  color: ${colors.base.white};
  z-index: 2;
  padding: 0.6rem;
  white-space: break-spaces;
  text-align: center;

  @media (min-width: ${screens.lg}) {
    font-size: ${fontSize.base};
  }
`;

const DiaryPreviewItem = ({
  date,
  location,
  imgSrc,
  onClick,
}: DiaryPreviewItemProps) => {
  return (
    <DiaryPreviewItemContainer onClick={onClick}>
      <Img
        shape="square"
        src={imgSrc}
        alt="다이어리 미리보기"
        className="h-full w-full"
      />
      <PreviewTextItemContainer>
        <div>{date}</div>
        <div>{location}</div>
      </PreviewTextItemContainer>
    </DiaryPreviewItemContainer>
  );
};

export default DiaryPreviewItem;
