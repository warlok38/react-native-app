import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    paginator: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    selectedPage: {
        borderColor: 'black',
        fontWeight: 'bold',
    },
    pages: {},
});
