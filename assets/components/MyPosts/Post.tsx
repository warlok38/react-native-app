import React from 'react';
import { Text, View, Image } from 'react-native';
import { stylesPost } from './style';
import images from './../../images/index';

export interface Props {
    message: string;
}

const Post: React.FC<Props> = ({ message }) => {
    return (
        <View style={stylesPost.wrapper}>
            <Image style={stylesPost.avatarImage} source={images.unknownUser} />

            <Text style={stylesPost.text}>{message}</Text>
        </View>
    );
};

export default Post;
