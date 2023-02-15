import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        // flexDirection: 'row',
        backgroundColor: '#fff',
        // marginVertical: 5,
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    image: {
        // flex: 1,
        justifyContent: 'space-around',
        height: 50,
        width: 50,
        resizeMode: 'contain',
        aspectRatio: 1,
        margin: 10,
        // borderRadius: 50,
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
