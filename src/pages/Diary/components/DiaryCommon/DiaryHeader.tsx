import { Link } from 'react-router-dom';
import { IconTopArrow } from '~/assets/icons';

interface DiaryHeaderProps {
  prevLink: string;
  spotName: string;
}

const DiaryHeader = ({ prevLink, spotName }: DiaryHeaderProps) => {
  return (
    <div className="font-title flex gap-2 font-bold">
      <Link to={prevLink}>
        <button className="text-grey-300">
          <IconTopArrow className="h-4 w-4 -rotate-90 fill-grey-300" />
        </button>
      </Link>
      <span>{spotName}</span>
    </div>
  );
};

export default DiaryHeader;
