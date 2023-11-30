import ImageCouple from '~/assets/images/couple.jpeg';

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  shape: 'square' | 'rectangle';
}

const imgShapes = {
  square: 'w-32 h-32',
  rectangle: 'w-[17.5rem] h-32',
};

const Img = ({ shape = 'square', className, src, ...props }: ImgProps) => {
  return (
    <img
      src={src || ImageCouple}
      className={`rounded-xl object-cover ${imgShapes[shape]} ${className}`}
      {...props}
    />
  );
};

export default Img;
