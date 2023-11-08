interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  shape: 'square' | 'rectangle';
}

const imgShapes = {
  square: 'w-32 h-32',
  rectangle: 'w-[17.5rem] h-32',
};

// 해당 클래스 사용하는 곳 삭제 필요
// const img = {
//   '.image-square': {
//     width: '8rem',
//     height: '8rem',
//     'object-fit': 'cover',
//     'border-radius': '0.625rem',
//   },
//   '.image-rectangle': {
//     width: '17.5rem',
//     height: '8rem',
//     'object-fit': 'cover',
//     'border-radius': '0.625rem',
//   },
// };

const Img = ({ shape = 'square', className, ...props }: ImgProps) => {
  return (
    <img
      {...props}
      className={`rounded-xl object-cover ${imgShapes[shape]} ${className}`}
    />
  );
};

export default Img;
