import { StyleSheet } from "react-native";
import { Dimens } from "../../../theme";
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  thumbnail: {
    flex: 1,
    height: undefined,
    aspectRatio: 1,
    borderRadius: Dimens.borderRadius,
  },

  titleAndDescription: {
    marginLeft: 16,
    flex: 2,
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 8
  }

});