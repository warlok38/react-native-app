import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './style';
import images from './../../images/index';
import MyPostContainer from '../MyPosts/MyPostsContainer';
import posts from '../../mocks/posts.json';
import { Posts } from '../../types/posts';

export interface Props {
    profile?: any;
    status?: string;
    posts?: Posts;
}

const Profile: React.FC<Props> = ({ profile, status }) => {
    return (
        <View>
            <View style={styles.info}>
                <View style={styles.avatar}>
                    <Image
                        style={styles.avatarImage}
                        source={images.unknownUser}
                    />
                </View>
                <View>
                    <Text style={styles.nameTitle}>
                        Имя: {profile && profile.fullName}
                    </Text>

                    <Text style={styles.statusTitle}>
                        {status ? status : 'Написать статус...'}
                    </Text>
                </View>
            </View>
            <View>
                <MyPostContainer />
            </View>
        </View>
    );
};

export default Profile;
