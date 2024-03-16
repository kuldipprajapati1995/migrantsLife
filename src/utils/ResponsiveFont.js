import {Platform, StatusBar, Dimensions} from 'react-native';

/**
 * @description to show responsive fonts
 * @param {number} fontSize
 * @param {number} standardScreenHeight
 */

const {height, width} = Dimensions.get('window');
export const ResponsiveFont = (fontSize, standardScreenHeight = height) => {
  const standardLength = width > height ? width : height;
  const offset = width > height ? 0 : StatusBar.currentHeight;

  const deviceHeight =
    Platform.OS === 'android' ? standardLength - offset : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};
