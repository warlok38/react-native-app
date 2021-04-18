import React from 'react';
import images from './../../images';
import { styles } from './style';
import { Link } from 'react-router-native';
import { UserType } from '../../types/types';
import { Button, Image, Text, View, TouchableOpacity } from 'react-native';
import { icons } from '../icons';

type PropsType = {
    user: UserType;
    followingInProgress: Array<number>;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
};

const User: React.FC<PropsType> = ({
    user,
    followingInProgress,
    follow,
    unfollow,
}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.row}>
                <View>
                    <Link to={'/profile/' + user.id}>
                        <Image
                            style={styles.userPhoto}
                            source={
                                user.photos.small != null
                                    ? { uri: user.photos.small }
                                    : images.unknownUser
                            }
                        />
                    </Link>
                </View>
                <View style={styles.userLabel}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userStatus}>{user.status}</Text>
                </View>
            </View>
            <View style={styles.buttonFriend}>
                {user.followed ? (
                    <TouchableOpacity
                        style={{
                            paddingHorizontal: 10,
                        }}
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onPress={() => {
                            unfollow(user.id);
                        }}
                    >
                        <View style={{ width: 30, height: 30 }}>
                            {icons.userRemove}
                        </View>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={{
                            paddingHorizontal: 10,
                        }}
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onPress={() => {
                            follow(user.id);
                        }}
                    >
                        <View style={{ width: 30, height: 30 }}>
                            {icons.userAdd}
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default User;
