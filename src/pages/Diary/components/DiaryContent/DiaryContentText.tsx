interface DiaryContentText {
  editMode: boolean;
}

const DiaryContentText = ({ editMode }: DiaryContentText) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl">
        <textarea
          className={`font-small textarea h-[15rem] w-[95%] resize-none placeholder:font-small placeholder:text-grey-300 ${
            editMode || 'focus:outline-none'
          }`}
          maxLength={200}
          placeholder="데이트를 하며 좋았던 순간을 기록해보세요"
          readOnly={editMode ? false : true}
        ></textarea>
      </div>
    </>
  );
};

export default DiaryContentText;
