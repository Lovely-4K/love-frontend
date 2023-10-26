import React from 'react';
import { Link } from 'react-router-dom';

interface MainPreviewItemProps {
  title: string;
  pageLink: '/calendar' | '/diary' | '/qeustion';
  content: React.ReactElement;
}

const MainPreviewItem = ({
  title,
  pageLink,
  content,
}: MainPreviewItemProps) => {
  return (
    <div>
      <Link to={pageLink}>
        <div>{title}</div>
      </Link>
      <div>{content}</div>
    </div>
  );
};

export default MainPreviewItem;
