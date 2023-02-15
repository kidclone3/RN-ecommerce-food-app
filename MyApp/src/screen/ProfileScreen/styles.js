import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        padding: SIZES.h3,
        paddingBottom: 10,
        height: '10%',
        // width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: SIZES.h1,
        fontWeight: 'bold',
        flex: 1,
        paddingLeft: SIZES.padding,
    },
    container: {
        backgroundColor: COLORS.white,
        // alignItems: 'center',
        justifyContent: 'space-between',
    },

    body: {
        padding: SIZES.padding * 2,
        height: '90%',
        backgroundColor: COLORS.white,
        display: 'flex',
    },
    bodyText: {
        fontSize: SIZES.body2,
        fontWeight: 'bold',
        paddingLeft: SIZES.padding,
    },
    avatarContainer: {
        // margin: SIZES.padding,
        marginTop: SIZES.padding * 2,
        marginBottom: SIZES.padding * 2,
    },
    paymentContainer: {},
});
export default styles;
