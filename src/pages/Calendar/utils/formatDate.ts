const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1 해주고, 두 자리로 맞춥니다.
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export default formatDate;
