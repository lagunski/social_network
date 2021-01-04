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
    getUsers: (currentPage:number, pageSize:number)=>void


}

class UsersContainer extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)

        /*this.props.toggleIsFetching(true)

        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })*/
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

        /*this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)

        usersApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        })*/
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   /*follow={this.props.follow}
                   unfollow={this.props.unfollow}*/
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

/*
let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}
*/


export default connect(mapStateToProps,
    {followThunk, unfollowThunk, setCurrentPage,
        toggleIsFollowingProgress, getUsers})(UsersContainer);