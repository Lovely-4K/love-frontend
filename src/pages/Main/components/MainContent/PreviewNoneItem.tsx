import { Link } from 'react-router-dom';

interface MainPreviewNoneItemProps {
  title: string;
  content: string;
  to: string;
  className?: string;
}

const PreviewNoneItem = ({ title, content, to }: MainPreviewNoneItemProps) => {
  return (
    <div className="flex h-20 w-full flex-col items-center justify-center lg:h-3/4">
      <div className="text-base">{title}</div>
      <Link to={to} className="text-base text-grey-400">
        {content} →
      </Link>
    </div>
  );
};

export default PreviewNoneItem;
