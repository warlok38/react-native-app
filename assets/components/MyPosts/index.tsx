import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Post from './Post';
import { styles } from './style';

const MyPosts = () => {
    return (
        <View style={styles.wrapper}>
            <Text>My posts</Text>
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Напишите что нибудь..."
                />
                <Button
                    title="asd"
                    onPress={() => console.log('button pressed')}
                />
                <View>
                    <Post message="hello world" />
                </View>
            </View>
        </View>
    );
};

export default MyPosts;
