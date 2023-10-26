import { Link } from 'react-router-dom';

const MainPreivewQuestion = () => {
  return (
    <div>
      <div>
        <img alt="질문자 사진" />
      </div>
      <div>
        <div>세미콜론 쓰기 vs 안 쓰기</div>
        <Link to="/question">
          <div>답변하러 가기 →</div>
        </Link>
      </div>
    </div>
  );
};

export default MainPreivewQuestion;
