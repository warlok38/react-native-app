import React, { forwardRef, useState } from 'react';
import {
    Text,
    TextInput as RNTextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Switch,
} from 'react-native';
import { ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { icons } from '../icons';
import { styles } from './style';

export const ProfileDataForm: React.FC<any> = ({
    handleSubmit,
    onCancel,
    profile,
}) => {
    const LoginSchema = Yup.object().shape({
        fullName: Yup.string().required('Required'),
        aboutMe: Yup.string().required('Required'),
    });
    const {
        setFieldValue,
        handleChange,
        handleSubmit: onSubmitHandler,
        handleBlur,
        values,
        errors = {},
        touched,
        isValidating,
    } = useFormik({
        validationSchema: LoginSchema,
        initialValues: {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            contacts: {
                facebook: profile.contacts.facebook,
                website: profile.contacts.website,
                vk: profile.contacts.vk,
                twitter: profile.contacts.twitter,
                instagram: profile.contacts.instagram,
                youtube: profile.contacts.youtube,
                github: profile.contacts.github,
                mainLink: profile.contacts.mainLink,
            },
        },
        onSubmit: (values) => handleSubmit(values),
    });

    const [isSwitchEnabled, toggleSwitchEnabled] = useState(
        values.lookingForAJob
    );

    const swithChangeHandler = (name: string, value: boolean) => {
        toggleSwitchEnabled(!value);
        setFieldValue(name, !value);
    };

    const profileNames = {
        fullName: 'Имя: ',
        aboutMe: 'Обо мне: ',
        lookingForAJob: 'Ищу работу: ',
        lookingForAJobDescription: 'Описание: ',
        contacts: 'Контакты: ',
        facebook: 'Facebook: ',
        website: 'Личный сайт: ',
        vk: 'Вконтакте: ',
        twitter: 'Twitter: ',
        instagram: 'Instagram: ',
        youtube: 'Youtube: ',
        github: 'Github: ',
        mainLink: 'MainLink: ',
    };

    const renderFormItem = (values: any) =>
        Object.keys(values).map((key) => {
            {
                if (key === 'lookingForAJobDescription' && !isSwitchEnabled) {
                    return null;
                }
            }
            if (key === 'contacts') {
                return (
                    <View key={key}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
                            {profileNames[key]}
                        </Text>
                        {Object.keys(values[key]).map((subKey) => {
                            return (
                                <View
                                    key={subKey}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom: 10,
                                    }}
                                >
                                    {/* @ts-ignore */}
                                    <Text>{profileNames[subKey]}</Text>
                                    <TextInput
                                        defaultValue={values[key][subKey]}
                                        keyboardAppearance="dark"
                                        returnKeyType="next"
                                        returnKeyLabel="next"
                                        onChangeText={handleChange(
                                            `${key}.${subKey}`
                                        )}
                                        onBlur={handleBlur(`${key}.${subKey}`)}
                                        /* @ts-ignore */
                                        error={errors[`${key}.${subKey}`]}
                                        /* @ts-ignore */
                                        touched={touched[`${key}.${subKey}`]}
                                    />
                                </View>
                            );
                        })}
                    </View>
                );
            }
            if (key === 'lookingForAJob') {
                return (
                    <View
                        key={key}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: 10,
                        }}
                    >
                        <Text>{profileNames[key]}</Text>
                        <Switch
                            onValueChange={() =>
                                swithChangeHandler(key, isSwitchEnabled)
                            }
                            value={isSwitchEnabled}
                        />
                    </View>
                );
            }
            return (
                <View
                    key={key}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: 10,
                    }}
                >
                    {/* @ts-ignore */}
                    <Text>{profileNames[key]}</Text>
                    <TextInput
                        defaultValue={values[key]}
                        keyboardAppearance="dark"
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onChangeText={handleChange(key)}
                        onBlur={handleBlur(key)}
                        /* @ts-ignore */
                        error={errors[`${key}`]}
                        /* @ts-ignore */
                        touched={touched[`${key}`]}
                        icon={icons.Error}
                    />
                </View>
            );
        });
    return (
        <View style={{ marginTop: 20, marginBottom: 30 }}>
            {renderFormItem(values)}
            {/* {isValidating && (
                <View>
                    <Text style={{ color: '#FF5A5F' }}>
                        Заполните обязательные поля!
                    </Text>
                </View>
            )} */}
            <Button label="Сохранить" onPress={onSubmitHandler} />
            <Button label="Отмена" onPress={onCancel} />
        </View>
    );
};

const Button: React.FC<{ label: string; onPress: () => void }> = ({
    label,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text
                style={{
                    color: 'black',
                    textTransform: 'uppercase',
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const TextInput: React.FC<any> = forwardRef(
    ({ icon, error, touched, ...otherProps }, ref) => {
        const validationColor = !touched
            ? '#223e4b'
            : error
            ? '#FF5A5F'
            : '#223e4b';
        return (
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    borderColor: validationColor,
                    borderWidth: StyleSheet.hairlineWidth,
                }}
            >
                <View style={{ flex: 1 }}>
                    <RNTextInput
                        underlineColorAndroid="transparent"
                        placeholderTextColor="rgba(34, 62, 75, 0.7)"
                        ref={ref}
                        {...otherProps}
                    />
                </View>
                {error && (
                    <View
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    >
                        {icon}
                    </View>
                )}
            </View>
        );
    }
);
