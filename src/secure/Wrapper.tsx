import React, {Component, Dispatch, PropsWithChildren} from 'react';
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {User} from "../classes/user";
import setUser from "../redux/actions/setUserAction";

class Wrapper extends Component<PropsWithChildren<any>> {
    state = {
        redirect: false
    }
    componentDidMount = async () => {
        try {
            const response = await axios.get('user');

            const user: User = response.data.data;

            this.props.setUser(new User(
                user.id,
                user.first_name,
                user.last_name,
                user.email,
                user.role,
                user.permissions,
            ));
        } catch (e) {
            this.setState({
                redirect: true
            })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/login'}/>;
        }

        return (
            <>
                <Nav/>

                <div className="container-fluid">
                    <div className="row">
                        <Menu/>

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state: { user: User }) => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setUser: (user: User) => dispatch(setUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);