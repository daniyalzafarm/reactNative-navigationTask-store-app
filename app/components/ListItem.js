import React from 'react';
import { Image, View, StyleSheet, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors'

function ListItem({ image, title, subTitle, onPress }) {
    return (
        <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}
        >
            <View style={styles.container}>
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.details}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                </View>
            </View>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        padding: 15
    },
    details: {
        marginLeft: 15,
        justifyContent: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "black",
    },
    title: {
        fontWeight: "900",
    },
    subTitle: {
        color: colors.medium
    }
})
export default ListItem;