import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Page404 = () => {
    return (
        <View style={styles.container}>
            <Text>Oups! This page is doesn't exist</Text>
        </View>
    );
};

export default Page404;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 30,
    },
});
