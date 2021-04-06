import React, { useState } from 'react';
import { ActivityIndicator, Button, Image, Text, View } from 'react-native';
import { styles } from './style';
import images from './../../images/index';
import MyPostContainer from '../MyPosts/MyPostsContainer';
import { ContactsType, ProfileType } from '../../types/types';

export interface Props {
    profile: ProfileType | null;
    status: string;
    updateStatus?: (status: string) => void;
    isOwner?: boolean;
    savePhoto?: (file: File) => void;
    saveProfile?: (profile: ProfileType) => Promise<any>;
}

const Profile: React.FC<Props> = ({ profile, status }) => {
    const [showContacts, toggleShowContacts] = useState(false);
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
                    <Text style={styles.statusTitle}>
                        {status ? status : 'Написать статус...'}
                    </Text>
                </View>
            </View>
            <View>
                <Text>
                    looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}
                </Text>
                <Text>About me: {profile.aboutMe}</Text>
                <View style={styles.toggleButton}>
                    <Button
                        title="contacts"
                        onPress={() => toggleShowContacts(!showContacts)}
                    />
                </View>
                <View style={!showContacts && { display: 'none' }}>
                    {Object.keys(profile.contacts).map((key) => {
                        return (
                            <Contacts
                                key={key}
                                contactTitle={key}
                                contactValue={
                                    profile.contacts[key as keyof ContactsType]
                                }
                            />
                        );
                    })}
                </View>
            </View>
            <View>
                <MyPostContainer />
            </View>
        </View>
    );
};

type ContactsPropsType = {
    contactTitle: string;
    contactValue: string;
};

const Contacts: React.FC<ContactsPropsType> = ({
    contactTitle,
    contactValue,
}) => {
    return (
        <View style={styles.contacts}>
            <Text>
                {contactTitle}: {contactValue}
            </Text>
        </View>
    );
};

export default Profile;
