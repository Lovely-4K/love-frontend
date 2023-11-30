import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { colors, screens } from '~/theme';

const StyledContainer = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${screens.lg}) {
    /* height: 32rem; */
    /* height: 50%; */
    width: 33.333333%;
    border: 1px solid ${colors.grey[200]};
    border-radius: 0.75rem;
    padding: 0.75rem 1.5rem;
  }
`;

interface MainPreviewItemProps {
  title: string;
  pageLink: string;
  content: ReactElement;
}

const PreviewItem = ({ title, pageLink, content }: MainPreviewItemProps) => {
  return (
    <StyledContainer>
      <Link
        to={pageLink}
        className="font-title my-2 mb-3 w-fit pl-1 font-bold lg:mb-5"
      >
        {title}
      </Link>
      {content}
    </StyledContainer>
  );
};

export default PreviewItem;
