import { StyleSheet, TextInput } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
    },
    button: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '100%',
        backgroundColor: 'gold',
        textAlign: 'center',
    },
});

export const stylesPost = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 10,
        borderColor: 'gray',
        borderTopWidth: 1,
    },
    avatarImage: {
        width: 30,
        height: 30,
    },
    text: {
        marginLeft: 10,
    },
    likes: {
        marginLeft: 'auto',
    },
});
