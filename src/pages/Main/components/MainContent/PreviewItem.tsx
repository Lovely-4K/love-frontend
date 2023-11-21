import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '~/router';
import { colors, screens } from '~/theme';

const StyledContainer = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;

  @media (min-width: ${screens.lg}) {
    height: 22rem;
    width: 33.333333%;
    border: 1px solid ${colors.grey[200]};
    padding: 0.75rem 1.5rem;
  }
`;

interface MainPreviewItemProps {
  title: string;
  pageLink: (typeof paths)[keyof typeof paths];
  content: ReactElement;
}

const PreviewItem = ({ title, pageLink, content }: MainPreviewItemProps) => {
  return (
    <StyledContainer>
      <Link to={pageLink} className="font-title my-2 w-full font-bold">
        {title}
      </Link>
      {content}
    </StyledContainer>
  );
};

export default PreviewItem;
