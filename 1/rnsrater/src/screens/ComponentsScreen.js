import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    return (
        <>
            <Text style={styles.textStyle}>This Is the ComponentsScreen:</Text>
        </>
    )
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 22
    }
})

export default ComponentsScreen;