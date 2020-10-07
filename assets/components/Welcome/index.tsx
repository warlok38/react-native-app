import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text>WELCOME</Text>
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        fontSize: 30,
    },
});
