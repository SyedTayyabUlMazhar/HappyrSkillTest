import { StyleSheet } from "react-native";
import { Dimens } from "../../theme";
import Colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  searchContainerWrapper: {
    backgroundColor: Colors.screenBackground,
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  searchInputContainer: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: Colors.searchIconBackground,
    borderRadius: Dimens.borderRadius,
  },
  searchInput: {
    flex: 1,
  },

  searchIcon: {
    width: 24,
    marginHorizontal: 16,
    alignSelf: 'center',
    height: undefined,
    aspectRatio: 1,
    tintColor: "white",
  },

  contentContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: Colors.screenBackground,
  },

  divider: {
    backgroundColor: Colors.divider,
    height: 1,
  }
});