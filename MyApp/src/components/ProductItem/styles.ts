import { StyleSheet } from 'react-native';

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
        flex: 2,
        height: 70,
        width: 70,
        resizeMode: 'center',
        aspectRatio: 1,
        margin: 10,
        borderRadius: 50,
    },
    rightContainer: {
        padding: 20,
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
