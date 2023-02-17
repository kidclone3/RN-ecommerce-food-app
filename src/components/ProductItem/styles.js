import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants';

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 20,
        backgroundColor: '#fff',
        marginVertical: 5,
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    image: {
        height: 100,
        width: 100,

        // flex: 1,
        justifyContent: 'space-around',
        resizeMode: 'cover',
        aspectRatio: 1,
        margin: SIZES.margin,
        borderRadius: SIZES.radius,
    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
    title: {
        fontSize: 18,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star: {
        margin: 2,
    },
});

export default styles;
