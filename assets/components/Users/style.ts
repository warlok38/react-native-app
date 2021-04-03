import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
    },
    userPhoto: {
        width: 60,
        height: 60,
    },
    loading: {
        zIndex: 999,
        position: 'absolute',
        marginVertical: '50%',
        marginHorizontal: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
