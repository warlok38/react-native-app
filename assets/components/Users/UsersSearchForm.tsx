import React from 'react';
import { Field, Form, Formik } from 'formik';
import { FilterType } from '../../store/users-reducer';
import { Button, Text, TextInput, View } from 'react-native';

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
};

type PropsType = {
    onFilterChanged: (filter: FilterType) => void;
};

type FormType = {
    term: string;
    friend: 'true' | 'false' | 'null';
};

export const UsersSearchForm: React.FC<PropsType> = React.memo(
    ({ onFilterChanged }) => {
        const submit = (
            values: FormType,
            {
                setSubmitting,
            }: { setSubmitting: (isSubmitting: boolean) => void }
        ) => {
            const filter: FilterType = {
                term: values.term,
                friend:
                    values.friend === 'null'
                        ? null
                        : values.friend === 'true'
                        ? true
                        : false,
            };

            onFilterChanged(filter);
            setSubmitting(false);
        };
        return (
            <View>
                <Formik
                    initialValues={{ term: '', friend: 'null' }}
                    validate={usersSearchFormValidate}
                    onSubmit={submit}
                >
                    {({ isSubmitting, handleSubmit }) => (
                        <Form>
                            <Field>
                                <TextInput />
                            </Field>

                            <Button
                                title="Найти"
                                onPress={() => handleSubmit()}
                                disabled={isSubmitting}
                            />
                        </Form>
                    )}
                </Formik>
            </View>
        );
    }
);
