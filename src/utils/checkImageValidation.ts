export function checkImageLength<T>(imgs: T[], newFiles: FileList) {
  if (imgs.length + newFiles.length > 5) {
    return [false, '파일은 최대 5장까지만 첨부 가능해요!'];
  }

  return [true, null];
}

export function checkImageType(file: File) {
  const { type } = file;

  if (!type.includes('image')) {
    return [
      false,
      '해당 파일의 형식은 지원하지 않아요! png, jpg, jpeg 등의 이미지 형식으로 올려주세요!',
    ];
  }
  if (
    !(type.includes('png') || type.includes('jpg') || type.includes('jpeg'))
  ) {
    return [
      false,
      '해당 파일의 형식은 지원하지 않아요! png, jpg, jpeg 등의 이미지 형식으로 올려주세요!',
    ];
  }

  return [true, null];
}
