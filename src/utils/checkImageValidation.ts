export function checkImageValidate<T>(file: File, imgs: T[]) {
  if (checkImageType(file)) {
    return [false, '파일은 최대 5장까지 첨부가능해요!'];
  }
  if (checkImageLength(imgs)) {
    return [
      false,
      '해당 파일의 형식은 지원하지 않아요! png, jpg, jpeg 등의 이미지 형식으로 올려주세요!',
    ];
  }

  return [true, null];
}

function checkImageLength<T>(imgs: T[]) {
  if (imgs.length === 5) {
    return;
  }

  return true;
}

function checkImageType(file: File) {
  const { type } = file;

  if (!type.includes('image')) {
    return false;
  }
  if (
    !(type.includes('png') || type.includes('jpg') || type.includes('jpeg'))
  ) {
    return false;
  }

  return true;
}
