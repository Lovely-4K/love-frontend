import { Link } from 'react-router-dom';

const MainPreivewQuestion = () => {
  return (
    <div className="flex h-full w-full items-center md:flex-col md:justify-center">
      <div className="m-4 flex h-[40%] items-center justify-center">
        <img
          className="w-24 rounded-full"
          src="https://picsum.photos/200"
          alt="질문자 사진"
        />
      </div>
      <div className="flex h-[40%] w-[70%] flex-col items-center">
        <div>세미콜론 쓰기 vs 안 쓰기</div>
        <Link to="/question">
          <div className="font-small text-grey-400">답변하러 가기 →</div>
        </Link>
      </div>
    </div>
  );
};

export default MainPreivewQuestion;
