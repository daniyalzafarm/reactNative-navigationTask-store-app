import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from "expo-constants";
function Screen({ children }) {
    return (
        <SafeAreaView style={styles.padding}>{children}</SafeAreaView>
    );
}
const styles = StyleSheet.create({
    padding: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
})
export default Screen;