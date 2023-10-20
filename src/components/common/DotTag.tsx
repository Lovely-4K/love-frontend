import {
  HTMLChakraProps,
  ThemingProps,
  chakra,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

/** @todo I로 시작하는 컨벤션 삭제?? */
export interface DotTagProps extends HTMLChakraProps<'span'>, ThemingProps {}

const DotTag = forwardRef<DotTagProps, 'span'>((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig('DotTag', { size, variant });

  return <chakra.span ref={ref} __css={styles} {...rest} />;
});

export default DotTag;
