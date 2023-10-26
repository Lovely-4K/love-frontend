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
    <div className="scrollbar-hide mx-3 flex-grow rounded-xl px-4 py-3 lg:h-[28.125rem] lg:w-[18.75rem] lg:border lg:border-solid lg:border-grey-200">
      <Link to={pageLink}>
        <div className="font-title my-2 font-bold">{title}</div>
      </Link>
      {content}
    </div>
  );
};

export default MainPreviewItem;
