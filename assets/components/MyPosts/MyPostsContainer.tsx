import React from 'react';
import { addPostActionCreator } from '../../store/profile-reducer';
import MyPosts from './index';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText: any) => {
            dispatch(addPostActionCreator(newPostText));
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
