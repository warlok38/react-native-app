import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './style';

export interface Props {
    input?: any;
    meta?: any;
    child?: any;
}
export const MyTextInput: React.FC<Props> = ({
    input,
    meta,
    child,
    ...props
}) => {
    const [value, onChangeText] = React.useState('');
    return (
        <TextInput
            {...input}
            {...props}
            value={value}
            onChangeText={onChangeText}
        />
    );
};
