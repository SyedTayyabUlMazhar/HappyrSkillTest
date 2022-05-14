import { StyleSheet } from "react-native";
import { Colors, Dimens, } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  searchIconContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 16,
    backgroundColor: Colors.searchIconBackground,
    borderRadius: Dimens.borderRadius,
  },

  searchIcon: {
    width: 24,
    height: undefined,
    aspectRatio: 1,
    tintColor: "white",
  },

  video: {
    width: Dimens.screenWidth,
    height: Dimens.screenHeight,
    backgroundColor: Colors.screenBackground,
  }
});