import { Dimensions } from 'react-native';
const screenDimensions = Dimensions.get('screen');

const dimens = {
  borderRadius: 12,
  screenWidth: screenDimensions.width,
  screenHeight: screenDimensions.height,
}

export default dimens;