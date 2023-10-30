import styled from '@emotion/styled';

interface DiaryPreviewItemProps {
  date: string;
  location: string;
  imgSrc: string;
}

const DiaryPreviewItemContainer = styled.div`
  position: relative;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  height: 8rem;
  width: 8rem;
  flex-shrink: 0;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 100%;

    & > div:hover {
      visibility: visible;
    }
  }
`;

const PreviewTextItemContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  visibility: hidden;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -50%;
  left: -50%;
  z-index: 2;
  transform: translate(-50%, -50%);
`;

const DiaryPreviewItem = ({
  date,
  location,
  imgSrc,
}: DiaryPreviewItemProps) => {
  return (
    <DiaryPreviewItemContainer>
      <PreviewTextItemContainer className="font-medium rounded-xl bg-base-deem text-base-white">
        <div>{date}</div>
        <div>{location}</div>
      </PreviewTextItemContainer>
      <img
        className="image-square flex-grow lg:image-rectangle"
        src={imgSrc}
        alt="다이어리 미리보기"
      />
    </DiaryPreviewItemContainer>
  );
};

export default DiaryPreviewItem;
