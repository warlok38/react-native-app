import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './style';
import images from './../../images/index';
import MyPosts from '../MyPosts';

export interface Props {
    profile?: any;
    status?: string;
}

const Profile: React.FC<Props> = ({ profile, status }) => {
    return (
        <View>
            <View>
                <View style={styles.avatar}>
                    <Image
                        style={styles.avatarImage}
                        source={images.unknownUser}
                    />
                </View>
                {<Text>Имя: {profile && profile.fullName}</Text>}
                {<Text>Статус: {status ? status : '-----'}</Text>}
            </View>
            <View>
                <MyPosts />
            </View>
        </View>
    );
};

export default Profile;
