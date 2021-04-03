import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    paginator: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    selectedPage: {
        borderColor: 'black',
        fontWeight: 'bold',
    },
    pages: {},
});
