import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
    StatusBar,
} from 'react-native';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent={false} />
            <View>
                <Text style={styles.text}>WELCOME</Text>
            </View>
            <View style={styles.spin}>
                <ActivityIndicator color="blue" size="large" />
            </View>
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'lightyellow',
    },
    text: {
        alignItems: 'center',
        marginTop: '30%',
        fontSize: 30,
    },
    spin: {
        marginTop: '30%',
    },
});
