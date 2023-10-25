const EmText = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-base-primary">{children}</span>;
};

const LoginTitle = () => {
  return (
    <div className="select-none space-y-5 text-7xl lg:text-8xl">
      <h1>
        <EmText>우</EmText>리, <EmText>이</EmText>거
      </h1>
      <h1>
        <EmText>삭</EmText>제하지
      </h1>
      <h1>말자</h1>
    </div>
  );
};

export default LoginTitle;
