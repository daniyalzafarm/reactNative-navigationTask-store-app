import React from 'react';
import { View, StyleSheet } from 'react-native';

function ListItemSeparator(props) {
    return (
        <View style={styles.seperator} />
    );
}
const styles = StyleSheet.create({
    seperator: {
        width: "80%",
        height: 1,
        backgroundColor: "grey",
        alignSelf: "center"
    }
})
export default ListItemSeparator;