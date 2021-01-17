import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {compose} from "redux";


type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


type OwnPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string


}


type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}

type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '13043';
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)

    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}/>
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileContainer)