import { NavLink } from 'react-router-dom';

import './header.scss';

//images
import logo from './logo.svg';
import user from './user.svg';


//components
import SignInForm from './SignInForm/SignInForm';

const Header = () => {
    return ( 
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink to="/" className="logo"><img src={logo} alt="" className="logo__img" /></NavLink>

                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item"><NavLink to="/about" className="menu__list-link">About Us</NavLink></li>
                            <li className="menu__list-item"><NavLink to="/courses" className="menu__list-link">Courses</NavLink></li>
                            <li className="menu__list-item"><NavLink to="/events" className="menu__list-link">Events</NavLink></li>
                            <li className="menu__list-item"><NavLink to="/blogs" className="menu__list-link">Blog</NavLink></li>
                            <li className="menu__list-item"><NavLink to="/contacts" className="menu__list-link">Contacts</NavLink></li>
                        </ul>
                    </nav>

                    <div className="header__buttons">
                        <button className="header__btn orange-btn">Get consultation</button>
                        <button className="header__btn">
                            <img src={user} alt="" className="header__btn-img" />
                            Log in / Register</button>
                    </div>
                </div>

                <SignInForm/>
            </div>
        </header>
     );
}
 
export default Header;