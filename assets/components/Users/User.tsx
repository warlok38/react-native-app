import React from 'react';
import images from './../../images';
import { styles } from './style';
import { Link } from 'react-router-native';
import { UserType } from '../../types/types';
import { Button, Image, Text, View } from 'react-native';

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
            <View>
                <View>
                    <Link to={'/profile/' + user.id}>
                        <Image
                            style={styles.userPhoto}
                            source={
                                user.photos.small != null
                                    ? user.photos.small
                                    : images.unknownUser
                            }
                        />
                    </Link>
                </View>
                <View>
                    {user.followed ? (
                        <Button
                            title="unfollow"
                            disabled={followingInProgress.some(
                                (id) => id === user.id
                            )}
                            onPress={() => {
                                unfollow(user.id);
                            }}
                        />
                    ) : (
                        <Button
                            title="follow"
                            disabled={followingInProgress.some(
                                (id) => id === user.id
                            )}
                            onPress={() => {
                                follow(user.id);
                            }}
                        />
                    )}
                </View>
            </View>
            <View>
                <View>
                    <Text>{user.name}</Text>
                    <Text>{user.status}</Text>
                </View>
            </View>
        </View>
    );
};

export default User;
