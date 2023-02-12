import { StyleSheet } from "react-native";
import { SIZES } from "../constants";
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: SIZES.padding * 3,
        marginTop: SIZES.padding * 2,
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    logo: {
        width: 55,
        height: 66,
        // maxWidth: 300,
        maxHeight: 200,
    },
    title: {
        padding: SIZES.padding * 3,
        fontSize: SIZES.h1,
        fontWeight: 'bold',
    }
});
export default styles;