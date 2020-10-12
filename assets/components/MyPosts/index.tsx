import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Posts } from '../../types/posts';
import { Field, reduxForm } from 'redux-form';
import Post from './Post';
import { styles } from './style';
import { MyTextInput } from '../common/FormControls';
import { Formik } from 'formik';

interface Props {
    posts?: Posts;
    addPost: any;
}
interface FormProps {
    addPost: any;
}
const AddPostForm: React.FC<FormProps> = ({ addPost }) => (
    <Formik
        initialValues={{
            newPostText: '',
        }}
        onSubmit={(values) => addPost(values.newPostText)}
    >
        {(formikProps) => (
            <>
                <TextInput
                    style={styles.textInput}
                    placeholder="Напишите что-нибудь..."
                    value={formikProps.values.newPostText}
                    onChangeText={formikProps.handleChange('newPostText')}
                />
                <Button
                    title="Отправить"
                    onPress={() => formikProps.handleSubmit()}
                />
            </>
        )}
    </Formik>
);

const MyPosts: React.FC<Props> = ({ posts, addPost }) => {
    return (
        <View style={styles.wrapper}>
            <AddPostForm addPost={addPost} />

            <View>
                <View>
                    {posts &&
                        posts.map((post, index) => (
                            <Post
                                key={index}
                                message={post.message}
                                likesCount={post.likesCount}
                            />
                        ))}
                </View>
            </View>
        </View>
    );
};

export default React.memo(MyPosts);
