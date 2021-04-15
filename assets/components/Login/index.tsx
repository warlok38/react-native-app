import React, { useRef, forwardRef, useState } from 'react';
import {
    Text,
    TextInput as RNTextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Switch as NativeSwitch,
} from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Entypo as Icon } from '@expo/vector-icons';
import { login } from '../../store/auth-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux-store';
import { Redirect } from 'react-router';

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

    return <LoginForm handleSubmit={onSubmit} captchaUrl={captchaUrl} />;
};

export const LoginForm: React.FC<any> = ({
    handleSubmit,
    error,
    captchaUrl,
}) => {
    const password = useRef(null);
    const [isSwitchEnabled, setIsSwitchEnabled] = useState(true);
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
        rememberMe: Yup.boolean(),
    });
    const {
        handleChange,
        handleSubmit: onSubmitHandler,
        handleBlur,
        values,
        errors,
        touched,
    } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: '', password: '', rememberMe: isSwitchEnabled },
        onSubmit: (values) => handleSubmit(values),
    });
    return (
        <View
            style={{
                marginVertical: '50%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
                Login
            </Text>
            <View
                style={{
                    paddingHorizontal: 32,
                    marginBottom: 16,
                    width: '100%',
                }}
            >
                <TextInput
                    icon="mail"
                    placeholder="Enter your email"
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
                    paddingHorizontal: 32,
                    marginBottom: 16,
                    width: '100%',
                }}
            >
                <TextInput
                    ref={password}
                    icon="key"
                    placeholder="Enter your password"
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
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingVertical: 10,
                }}
            >
                <Text>Remember me</Text>
                <Switch
                    onBlur={handleBlur('rememberMe')}
                    error={errors.rememberMe}
                    touched={touched.rememberMe}
                    onChange={handleChange('rememberMe')}
                    isEnabled={isSwitchEnabled}
                    setIsEnabled={setIsSwitchEnabled}
                />
            </View>
            <Button label="Login" onPress={onSubmitHandler} />
        </View>
    );
};

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
                backgroundColor: '#e94832',
            }}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text
                style={{
                    fontSize: 18,
                    color: 'white',
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
                    <Icon name={icon} color={validationColor} size={16} />
                </View>
                <View style={{ flex: 1 }}>
                    <RNTextInput
                        underlineColorAndroid="transparent"
                        placeholderTextColor="rgba(34, 62, 75, 0.7)"
                        ref={ref}
                        {...otherProps}
                    />
                </View>
            </View>
        );
    }
);

const Switch: React.FC<any> = ({
    isEnabled,
    setIsEnabled,
    onChange,
    ...otherProps
}) => {
    const toggleSwitch = () => {
        setIsEnabled((previousState: boolean) => !previousState);
    };
    const onChangeHandler = () => {
        toggleSwitch();
    };

    return (
        <View style={styles.container}>
            <NativeSwitch
                trackColor={{ false: '#767577', true: '#beebc7' }}
                thumbColor={isEnabled ? '#7acc8c' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={onChangeHandler}
                value={isEnabled}
                {...otherProps}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
