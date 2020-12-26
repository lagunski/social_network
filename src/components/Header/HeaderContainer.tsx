import React from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import {AppStateType} from "../../Redux/redux-store";
import {setAuthUserData} from "../../Redux/auth-reducer";
import axios from "axios";


type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setAuthUserData: (id: number | null, login: string | null, email: string | null) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type HeaderContainerPropsType = OwnPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email);
                }

            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)