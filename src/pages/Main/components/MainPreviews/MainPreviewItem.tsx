import React from 'react';

interface MainPreviewItemProps {
  title: string;
  content: React.ReactElement;
}

const MainPreviewItem = ({ title, content }: MainPreviewItemProps) => {
  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default MainPreviewItem;
