import React from 'react';
import { actions } from '../../store/profile-reducer';
import MyPosts, { DispatchPropsType, MapPropsType } from './index';
import { connect } from 'react-redux';
import { AppStateType } from '../../store/redux-store';

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    } as MapPropsType;
};

const MyPostsContainer = connect<
    MapPropsType,
    DispatchPropsType,
    {},
    AppStateType
>(mapStateToProps, {
    addPost: actions.addPostActionCreator,
})(MyPosts);

export default MyPostsContainer;
