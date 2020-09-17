import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dimensions } from "react-native";

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default Header;

const screenHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems:"center",
        height: screenHeight * 0.1,
        display: "flex",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
})