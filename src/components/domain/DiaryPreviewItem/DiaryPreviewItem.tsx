import styled from '@emotion/styled';
import { colors, fontSize, screens } from '~/theme';
import { Img } from '~/components/common';

interface DiaryPreviewItemProps {
  date: string;
  location: string;
  imgSrc: string;
}

const DiaryPreviewItemContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 7rem;
  min-width: 7rem;
  height: 100%;
  width: 100%;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${screens.lg}) {
    min-height: auto;
    min-width: auto;
    height: 100%;
    width: 100%;
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
  font-size: ${fontSize.base};
  color: ${colors.base.white};
  z-index: 2;
`;

const DiaryPreviewItem = ({
  date,
  location,
  imgSrc,
}: DiaryPreviewItemProps) => {
  return (
    <DiaryPreviewItemContainer>
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
