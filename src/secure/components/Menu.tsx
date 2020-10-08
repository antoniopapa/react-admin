import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {User} from "../../classes/user";

class Menu extends Component<{ user: User }> {
    menuItems = [
        {
            link: '/users',
            name: 'Users'
        },
        {
            link: '/roles',
            name: 'Roles'
        },
        {
            link: '/products',
            name: 'Products'
        },
        {
            link: '/orders',
            name: 'Orders'
        }
    ]

    render() {
        let menu: JSX.Element[] = [];

        this.menuItems.forEach(item => {
            if (this.props.user.canView(item.name.toLowerCase())) {
                menu.push(
                    <li className="nav-item">
                        <NavLink to={item.link} className="nav-link">
                            {item.name}
                        </NavLink>
                    </li>
                );
            }
        });

        return (
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="sidebar-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink to={'/dashboard'} className="nav-link">
                                Dashboard
                            </NavLink>
                        </li>

                        {menu}
                    </ul>
                </div>
            </nav>
        )
    }
}

// @ts-ignore
export default connect(state => ({user: state.user}))(Menu);