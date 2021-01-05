import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom";
import {AuthPropsType} from "../../Redux/auth-reducer";


type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


type OwnPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapStateToPropsType = {
    profile: ProfileType | null
    auth: AuthPropsType

}

type MapDispatchToPropsType = {
    getUserProfile: (userId:string)=> void
}

type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }

        this.props.getUserProfile(userId);

    }

    render() {
        if (!this.props.auth.isAuth) return <Redirect to={"/login"}/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    auth: state.auth
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);