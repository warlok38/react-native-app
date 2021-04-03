import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { Users } from './Users';
import { getIsFetching } from '../../store/users-selectors';

type UsersPagePropsType = {
    pageTitle: string;
};

export const UsersContainer: React.FC<UsersPagePropsType> = () => {
    const isFetching = useSelector(getIsFetching);
    return <Users loading={isFetching} />;
};
