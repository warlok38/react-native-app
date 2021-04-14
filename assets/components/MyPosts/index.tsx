import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Posts } from '../../types/posts';
import { Field, reduxForm } from 'redux-form';
import Post from './Post';
import { styles } from './style';
import { MyTextInput } from '../common/FormControls';
import { Formik } from 'formik';
import { PostType } from '../../types/types';

interface Props {
    posts?: Posts;
    addPost: any;
}
interface FormProps {
    addPost: any;
    newPostText?: string;
}
export type MapPropsType = {
    posts: Array<PostType>;
};
export type DispatchPropsType = {
    addPost: (newPostText: string) => void;
};

const AddPostForm: React.FC<FormProps> = ({ addPost, newPostText }) => (
    <Formik
        initialValues={{
            newPostText: newPostText,
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
                    onPress={() => newPostText && formikProps.handleSubmit()}
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
