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
    backgroundColor: Colors.dim,
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
  },

  infoContainer: {
    position: 'absolute',
    bottom: 32,
    width: Dimens.screenWidth,
    padding: 16,
    backgroundColor: Colors.dim,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  description: {
    fontSize: 16,
    marginTop: 8
  },

  tag: {
    fontSize: 12,
    marginTop: 8
  }
});