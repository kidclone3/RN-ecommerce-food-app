import { StyleSheet } from "react-native";
import {COLORS, SIZES} from "../constants";
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: SIZES.padding * 3,
        paddingTop: SIZES.padding * 5,
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
        paddingVertical: Math.max(Math.round(SIZES.width * 0.05),SIZES.padding * 3),
        paddingHorizontal: SIZES.padding3,
        fontSize: SIZES.h1,
        fontWeight: 'bold',
        color: COLORS.black,
    }
});
export default styles;