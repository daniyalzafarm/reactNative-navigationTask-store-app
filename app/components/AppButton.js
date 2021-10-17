import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// import colors from "../config/colors";

function AppButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "dodgerblue",
        borderRadius: 25,
        // width: 120,
        // height: 120,
        fontSize: 20,

        margin: 20
    },
    text: {
        color: "white",
        fontSize: 18,
        textTransform: "uppercase",
        padding: 30,
        textAlign: "center",
        fontWeight: "bold"
    }
})
export default AppButton;