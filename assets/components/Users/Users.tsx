import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterType, requestUsers } from '../../store/users-reducer';
import Paginator from '../common/Paginator';
import User from './User';
import { UsersSearchForm } from './UsersSearchForm';
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter,
} from './../../store/users-selectors';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './style';

type Props = {
    loading: boolean;
};

export const Users: React.FC<Props> = ({ loading }) => {
    const users = useSelector(getUsers);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUsersFilter);
    const followingInProgress = useSelector(getFollowingInProgress);

    const dispatch = useDispatch();

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter));
    };

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter));
    };

    const follow = (userId: number) => {
        dispatch(follow(userId));
    };
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId));
    };

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter));
    }, []);

    return (
        <View>
            {/* {loading && (
                <View style={styles.loading}>
                    <ActivityIndicator
                        color="white"
                        size="large"
                        style={{ zIndex: 999 }}
                    />
                </View>
            )} */}
            {/* <UsersSearchForm onFilterChanged={onFilterChanged} /> */}
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            <View>
                {users.map((user) => (
                    <User
                        key={user.id}
                        user={user}
                        followingInProgress={followingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                    />
                ))}
            </View>
        </View>
    );
};
