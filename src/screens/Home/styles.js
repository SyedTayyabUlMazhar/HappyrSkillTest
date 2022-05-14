import { StyleSheet } from "react-native";
import Colors from '../../theme/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
  },

  searchIconContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 16,
    backgroundColor: Colors.darkGrey,
    borderRadius: 12,
  },

  searchIcon: {
    width: 24,
    height: undefined,
    aspectRatio: 1,
    tintColor: "white",
  }
});