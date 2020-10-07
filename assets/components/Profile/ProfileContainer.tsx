// import React, { Component } from 'react';
// import Profile from './index';
// import { connect } from 'react-redux';
// import {
//     getUserProfile,
//     getStatus,
//     // updateStatus,
//     // savePhoto,
//     // saveProfile,
// } from '../../store/profile-reducer';
// import { withRouter } from 'react-router-dom';
// import { compose } from 'redux';

// export interface Props {
//     isOwner?: any;
//     profile?: any;
//     status?: string;
//     updateStatus?: any;
//     savePhoto?: any;
//     saveProfile?: any;
//     getUserProfile?: any;
//     getStatus?: any;
//     match?: any;
//     authorizedUserId?: number;
//     history?: any;
// }

// class ProfileContainer extends Component<Props> {
//     refreshProfile() {
//         let userId = this.props.match.params.userId;
//         if (!userId) {
//             userId = this.props.authorizedUserId;
//             if (!userId) {
//                 this.props.history.push('/login');
//             }
//         }
//         this.props.getUserProfile(userId);
//         this.props.getStatus(userId);
//     }

//     componentDidMount() {
//         this.refreshProfile();
//     }

//     componentDidUpdate(prevProps: any) {
//         if (this.props.match.userId !== prevProps.match.params.userId) {
//             this.refreshProfile();
//         }
//     }

//     render() {
//         return (
//             <Profile
//                 {...this.props}
//                 // isOwner={!this.props.match.params.userId}
//                 profile={this.props.profile}
//                 status={this.props.status}
//                 // updateStatus={this.props.updateStatus}
//                 // savePhoto={this.props.savePhoto}
//                 // saveProfile={this.props.saveProfile}
//             />
//         );
//     }
// }

// const mapStateToProps = (state: any) => ({
//     profile: state.profilePage.profile,
//     status: state.profilePage.status,
//     // authorizedUserId: state.auth.userId,
//     // isAuth: state.auth.isAuth,
// });

// export default compose(
//     connect(mapStateToProps, {
//         getUserProfile,
//         getStatus,
//         // updateStatus,
//         // savePhoto,
//         // saveProfile,
//     })
//     // withRouter
//     // withAuthRedirect
// )(ProfileContainer);
