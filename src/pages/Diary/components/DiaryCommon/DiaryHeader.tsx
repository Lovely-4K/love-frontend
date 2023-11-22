import { Link } from 'react-router-dom';
import { IconTopArrow } from '~/assets/icons';

interface DiaryHeaderProps {
  keyword: string;
  prevPageLink: string;
}

const DiaryHeader = ({ keyword, prevPageLink }: DiaryHeaderProps) => {
  return (
    <div className="font-title flex gap-2 font-bold">
      <Link to={prevPageLink}>
        <button className="text-grey-300">
          <IconTopArrow className="h-4 w-4 -rotate-90 fill-grey-300" />
        </button>
      </Link>
      <span>{keyword}</span>
    </div>
  );
};

export default DiaryHeader;
