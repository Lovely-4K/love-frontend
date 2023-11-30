import { Link } from 'react-router-dom';

const FormCustomLink = () => {
  return (
    <div className="my-7 flex flex-col items-center justify-center gap-2">
      <div className="font-medium">이제 새 질문을 작성할 수 있어요!</div>
      <div>
        <Link
          className="font-small font-bold text-grey-400"
          to="/question/create"
        >
          새 질문 작성하러 가기 →
        </Link>
      </div>
    </div>
  );
};

export default FormCustomLink;
