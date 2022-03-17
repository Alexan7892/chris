import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">
                    Main
                </NavLink>

                <NavLink to="/tech">
                    Used technologies
                </NavLink>

                <NavLink to="/questions">
                    Questions
                </NavLink>
                This is header
            </div>
        );
    }
}

export default Header;