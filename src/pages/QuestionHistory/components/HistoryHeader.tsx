import { useNavigate } from 'react-router-dom';
import { LeftArrow } from '~/assets/icons';

const HistoryHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="flex w-full items-center gap-3 py-3">
      <div className="box-content cursor-pointer rounded-full px-2 py-2 hover:bg-grey-100">
        <LeftArrow
          onClick={() => {
            navigate(-1);
          }}
          className="h-5 w-5  fill-grey-400 "
        />
      </div>
      <div>우리의 질문들</div>
    </header>
  );
};

export default HistoryHeader;
