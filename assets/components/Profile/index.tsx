import React, { useState } from 'react';
import {
    ActivityIndicator,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './style';
import images from './../../images/index';
import MyPostContainer from '../MyPosts/MyPostsContainer';
import { ContactsType, ProfileType } from '../../types/types';
import Status from './Status';
import ProfileData from './ProfileData';
import { ProfileDataForm } from './ProfileDataForm';

type PropsType = {
    profile: ProfileType | null;
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
    saveProfile: (profile: ProfileType) => Promise<any>;
};

const Profile: React.FC<PropsType> = ({
    profile,
    status,
    isOwner,
    updateStatus,
    saveProfile,
}) => {
    const [editMode, setEditMode] = useState(false);
    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    };
    const onCancel = () => {
        setEditMode(false);
    };

    if (!profile) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator
                    color="white"
                    size="large"
                    style={{ zIndex: 999 }}
                />
            </View>
        );
    }
    return (
        <View>
            <View style={styles.info}>
                <View style={styles.avatar}>
                    <Image
                        style={styles.avatarImage}
                        source={
                            profile.photos.small != null
                                ? { uri: profile.photos.small }
                                : images.unknownUser
                        }
                    />
                </View>
                <View style={styles.title}>
                    <Text style={styles.nameTitle}>{profile.fullName}</Text>
                    <Status
                        status={status}
                        updateStatus={updateStatus}
                        isOwner={isOwner}
                    />
                </View>
            </View>
            {editMode ? (
                <ProfileDataForm
                    profile={profile}
                    handleSubmit={onSubmit}
                    onCancel={onCancel}
                />
            ) : (
                <ProfileData
                    profile={profile}
                    isOwner={isOwner}
                    goToEditMode={() => {
                        setEditMode(true);
                    }}
                />
            )}
            {/* <View>
                <MyPostContainer />
            </View> */}
        </View>
    );
};

export default Profile;
