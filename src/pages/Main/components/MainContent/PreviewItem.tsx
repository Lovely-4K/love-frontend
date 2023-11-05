import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface MainPreviewItemProps {
  title: string;
  pageLink: '/calendar' | '/diary' | '/question';
  content: ReactElement;
}

const PreviewItem = ({ title, pageLink, content }: MainPreviewItemProps) => {
  return (
    <div className="mx-4 flex flex-col rounded-xl px-4 py-3 md:h-[22rem] md:w-1/3 md:border md:border-solid md:border-grey-200">
      <Link to={pageLink} className="font-title my-2 w-full font-bold">
        {title}
      </Link>
      {content}
    </div>
  );
};

export default PreviewItem;
