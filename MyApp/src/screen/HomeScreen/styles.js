import { StyleSheet } from 'react-native'
import { icons, images, SIZES, COLORS, FONTS } from '../../constants'


const styles = StyleSheet.create({
    buttonContainer: {
        padding: SIZES.padding,
        paddingBottom: SIZES.padding,
        backgroundColor: COLORS.white,
        // borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.padding,
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        height: 80,
        // width: 100,
        // ...styles.shadow
    },
    flatList: {
        backgroundColor: COLORS.white,
        flexGrow: 0,
    },
    container: {
        backgroundColor: COLORS.white,
        flex: 1
    },
    header: { alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: SIZES.padding }
})
export default styles;