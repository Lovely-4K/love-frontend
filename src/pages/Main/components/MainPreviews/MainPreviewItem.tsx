import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

interface MainPreviewItemProps {
  title: string;
  pageLink: '/calendar' | '/diary' | '/qeustion';
  content: React.ReactElement;
}

const MainPreviewItemContainer = styled.div`
  margin: 1rem;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;

  @media screen and (min-width: 768px) {
    width: 30%;
    height: calc(100vh - 23rem);
    max-height: 100%;
  }
`;

const MainPreviewItem = ({
  title,
  pageLink,
  content,
}: MainPreviewItemProps) => {
  return (
    <MainPreviewItemContainer className="md:border md:border-solid md:border-grey-200">
      <Link to={pageLink}>
        <div className="h-15 font-title my-2 w-full font-bold">{title}</div>
      </Link>
      {content}
    </MainPreviewItemContainer>
  );
};

export default MainPreviewItem;
