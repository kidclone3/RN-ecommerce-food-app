import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        padding: SIZES.h3,
        paddingBottom: 10,
        height: '30%',
        // width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchBar: {
        // padding: SIZES.padding * 2,
        backgroundColor: COLORS.white,
        // borderColor: COLORS.primary,
        height: SIZES.largeTitle,
        width: SIZES.width * 0.8,
        paddingRight: SIZES.padding * 2,
        // marginRight: SIZES.padding * 2,
        marginBottom: SIZES.padding * 2,
        marginTop: SIZES.padding * 2,
        borderRadius: SIZES.radius * 2,
    },
    searchBarInput: {
        backgroundColor: COLORS.lightGray,
        borderColor: COLORS.white,
    },
});
export default styles;
