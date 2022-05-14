import { StyleSheet, } from "react-native"
import { Colors, Dimens } from "../../theme"

export default StyleSheet.create({
    container: {
        position:'absolute',
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        width: Dimens.screenWidth,
        height: Dimens.screenHeight,
        backgroundColor: Colors.dim,
    },
})