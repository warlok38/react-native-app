import React from 'react';
import images from './../../images';
import { styles } from './style';
import { Link } from 'react-router-native';
import { UserType } from '../../types/types';
import { Button, Image, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from '../icons';

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
                    {user.status && (
                        <Text style={styles.userStatus}>{user.status}</Text>
                    )}
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
                        <Icon
                            name="userRemove"
                            width={30}
                            height={30}
                            fill="#323232"
                        />
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
                        <Icon
                            name="userAdd"
                            width={30}
                            height={30}
                            fill="#323232"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default User;
