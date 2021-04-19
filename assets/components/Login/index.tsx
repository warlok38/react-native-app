import React, { useRef, forwardRef, useState } from 'react';
import {
    Text,
    TextInput as RNTextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Switch,
    Image,
} from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../store/auth-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux-store';
import { Redirect } from 'react-router';
import { reduxForm } from 'redux-form';
import { Entypo as EntypoIcon } from '@expo/vector-icons';
import { Icon } from '../icons';

export const Login: React.FC = () => {
    const captchaUrl = useSelector(
        (state: AppStateType) => state.auth.captchaUrl
    );
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
    const dispatch = useDispatch();

    const onSubmit = (data: any) => {
        // console.log(data.email, data.password, data.rememberMe, data.captcha);
        dispatch(login(data.email, data.password, true, data.captcha));
    };
    if (isAuth) {
        return <Redirect to={'/profile'} />;
    }

    return <LoginReduxForm handleSubmit={onSubmit} captchaUrl={captchaUrl} />;
};

export const LoginForm: React.FC<any> = ({
    handleSubmit,
    error,
    captchaUrl,
}) => {
    const password = useRef(null);
    const [isSwitchEnabled, toggleSwitch] = useState(false);
    const swithChangeHandler = (name: string, value: boolean) => {
        toggleSwitch(!value);
        setFieldValue(name, !value);
    };

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
        rememberMe: Yup.boolean(),
        captcha: captchaUrl && Yup.string().required('Required'),
    });
    const {
        handleChange,
        setFieldValue,
        handleSubmit: onSubmitHandler,
        handleBlur,
        values,
        errors,
        touched,
    } = useFormik({
        validationSchema: LoginSchema,
        initialValues: {
            email: '',
            password: '',
            rememberMe: isSwitchEnabled,
            captcha: '',
        },
        onSubmit: (values) => handleSubmit(values),
    });
    return (
        <View
            style={{
                marginVertical: '50%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 32,
            }}
        >
            <Text style={{ color: '#223e4b', fontSize: 24, marginBottom: 16 }}>
                Авторизация
            </Text>
            <View
                style={{
                    width: '100%',
                }}
            >
                <TextInput
                    icon="mail"
                    placeholder="Введите email..."
                    autoCapitalize="none"
                    autoCompleteType="email"
                    keyboardType="email-address"
                    keyboardAppearance="dark"
                    returnKeyType="next"
                    returnKeyLabel="next"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    error={errors.email}
                    touched={touched.email}
                    //@ts-ignore
                    onSubmitEditing={() => password.current?.focus()}
                />
            </View>
            <View
                style={{
                    width: '100%',
                    marginTop: 16,
                }}
            >
                <TextInput
                    ref={password}
                    icon="key"
                    placeholder="Введите пароль..."
                    secureTextEntry
                    autoCompleteType="password"
                    autoCapitalize="none"
                    keyboardAppearance="dark"
                    returnKeyType="go"
                    returnKeyLabel="go"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    error={errors.password}
                    touched={touched.password}
                    onSubmitEditing={() => onSubmitHandler()}
                />
            </View>
            {captchaUrl && (
                <View
                    style={{
                        flex: 1,
                        width: '100%',
                        marginTop: 16,
                    }}
                >
                    <Image
                        style={{
                            width: '100%',
                            resizeMode: 'contain',
                            height: 50,
                            marginBottom: 16,
                        }}
                        source={{ uri: captchaUrl }}
                    />
                    <TextInput
                        placeholder="Введите капчу..."
                        returnKeyType="go"
                        keyboardAppearance="dark"
                        onChangeText={handleChange('captcha')}
                        onBlur={handleBlur('captcha')}
                        error={errors.captcha}
                        touched={touched.captcha}
                        onSubmitEditing={() => onSubmitHandler()}
                    />
                </View>
            )}
            <View
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingVertical: 15,
                }}
            >
                <Text>Запомнить данные</Text>
                <Switch
                    onValueChange={() =>
                        swithChangeHandler('rememberMe', isSwitchEnabled)
                    }
                    value={isSwitchEnabled}
                />
            </View>
            {error && (
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: '#FF5A5F' }}>{error}</Text>
                </View>
            )}
            <Button label="Войти" onPress={onSubmitHandler} />
        </View>
    );
};
//@ts-ignore
const LoginReduxForm: React.FC<any> = reduxForm({
    form: 'login',
})(LoginForm);

const Button: React.FC<{ label: string; onPress: () => void }> = ({
    label,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={{
                borderRadius: 8,
                height: 50,
                width: 245,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
            }}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text
                style={{
                    fontSize: 18,
                    color: '#223e4b',
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
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 48,
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    borderColor: validationColor,
                    borderWidth: StyleSheet.hairlineWidth,
                    padding: 8,
                }}
            >
                <View style={{ padding: 8 }}>
                    <EntypoIcon name={icon} color={validationColor} size={16} />
                </View>
                <View style={{ flex: 1 }}>
                    <RNTextInput
                        underlineColorAndroid="transparent"
                        placeholderTextColor="rgba(34, 62, 75, 0.7)"
                        ref={ref}
                        {...otherProps}
                    />
                </View>
                {error && (
                    <Icon name="error" width={20} height={20} fill="#FF5A5F" />
                )}
            </View>
        );
    }
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
