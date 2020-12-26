import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {withRouter, RouteComponentProps} from "react-router-dom";

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


type OwnPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: null) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)

            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);