import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

type PropsType = {
    status: string;
    updateStatus: (status: string) => void;
};

const ProfileStatus: React.FC<PropsType> = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true);
    };
    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onStatusChange = (e: string) => {
        setStatus(e);
    };

    return (
        <View>
            {!editMode && (
                <View style={styles.status}>
                    <TouchableOpacity onLongPress={activateMode}>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            style={[
                                props.status
                                    ? styles.statusHasTitle
                                    : styles.statusHasNoTitle,
                                styles.statusTitle,
                            ]}
                        >
                            {props.status ? props.status : 'Написать статус...'}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            {editMode && (
                <View>
                    <TextInput
                        onChangeText={onStatusChange}
                        onBlur={deactivateMode}
                        autoFocus
                        value={status}
                        style={styles.statusEdit}
                    />
                </View>
            )}
        </View>
    );
};

export default ProfileStatus;
