import { PixelRatio } from 'react-native';

export const getTypeImage = (imageArray) => {
  const ratio = PixelRatio.get();
  const imageObj = imageArray.find(imageItem => imageItem.ratio === ratio);
  return imageObj ? imageObj.file : imageArray[0].file;
};
