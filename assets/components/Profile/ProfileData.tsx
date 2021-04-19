import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { ContactsType, ProfileType } from '../../types/types';
import { Icon } from '../icons';

type typeProfileDataPropsType = {
    profile: ProfileType;
    isOwner: boolean;
    goToEditMode: () => void;
};
const ProfileData: React.FC<typeProfileDataPropsType> = ({
    profile,
    isOwner,
    goToEditMode,
}) => {
    const [showContacts, toggleShowContacts] = useState(false);

    return (
        <View>
            <View>
                <Text style={styles.about}>Обо мне: {profile.aboutMe}</Text>
                <Text style={styles.about}>
                    Ищу работу: {profile.lookingForAJob ? 'Да' : 'Нет'}
                </Text>
                {profile.lookingForAJob && (
                    <Text style={[styles.about, { marginLeft: 10 }]}>
                        Описание: {profile.lookingForAJobDescription}
                    </Text>
                )}
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Text style={styles.about}>Контакты: </Text>
                    <TouchableOpacity
                        style={[styles.toggleButton]}
                        onPress={() => toggleShowContacts(!showContacts)}
                    >
                        <Text style={styles.toggleButtonText}>
                            {showContacts ? 'Скрыть' : 'Показать'}
                        </Text>
                        {showContacts ? (
                            <Icon
                                name="arrowUp"
                                width={25}
                                height={25}
                                fill="#323232"
                            />
                        ) : (
                            <Icon
                                name="arrowDown"
                                width={25}
                                height={25}
                                fill="#323232"
                            />
                        )}
                    </TouchableOpacity>
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
            {isOwner && (
                <View>
                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={goToEditMode}
                    >
                        <Text
                            style={{
                                color: 'black',
                                textTransform: 'uppercase',
                            }}
                        >
                            Редактировать
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
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
            <Text style={styles.about}>
                {contactTitle}: {contactValue}
            </Text>
        </View>
    );
};

export default ProfileData;
