const QuestionCreateFormInput = () => {
  return (
    <div className="flex flex-col gap-3">
      <label>상대방에게 물어보고 싶은 질문이 있나요? </label>
      <input
        maxLength={100}
        className="input-bottom border-grey-200 p-3"
        placeholder="질문을 작성해보세요"
      />
    </div>
  );
};

export default QuestionCreateFormInput;
