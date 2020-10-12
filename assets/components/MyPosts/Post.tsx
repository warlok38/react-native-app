import React from 'react';
import { Text, View, Image } from 'react-native';
import { stylesPost } from './style';
import images from './../../images/index';

export interface Props {
    message: string;
    likesCount?: number;
}

const Post: React.FC<Props> = ({ message, likesCount = 0 }) => {
    return (
        <View style={stylesPost.wrapper}>
            <Image style={stylesPost.avatarImage} source={images.unknownUser} />

            <Text style={stylesPost.text}>{message}</Text>
            <Text style={stylesPost.likes}>likes {likesCount}</Text>
        </View>
    );
};

export default Post;
