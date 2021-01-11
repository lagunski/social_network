import React from 'react';
import {connect} from "react-redux";
import {
    followThunk, getUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollowThunk,
    UsersType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from 'redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type UsersAPIComponentPropsType = {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followThunk: (id: string) => void
    unfollowThunk: (id: string) => void
    setCurrentPage: (pageNumber: number) => void
    isFetching: boolean
    followingInProgress: Array<string>
    toggleIsFollowingProgress: (isFetching: boolean, userId: string) => void
    getUsers: (currentPage: number, pageSize: number) => void


}

class UsersContainer extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


/*export default connect(mapStateToProps,
    {followThunk, unfollowThunk, setCurrentPage,
        toggleIsFollowingProgress, getUsers})(UsersContainer);*/

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            followThunk, unfollowThunk, setCurrentPage,
            toggleIsFollowingProgress, getUsers
        }))
    (UsersContainer)