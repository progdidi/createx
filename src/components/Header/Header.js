import logo from './logo.svg';
import './header.scss';

const Header = () => {
    return ( 
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="logo"><img src={logo} alt="" className="logo__img" /></a>

                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item"><a href="" className="menu__list-link">About Us</a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link">Courses</a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link">Events</a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link">Blog</a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link">Contacts</a></li>
                        </ul>
                    </nav>

                    <div className="header__buttons">
                        <button className="header__btn orange-btn">Get consultation</button>
                        <button className="header__btn">Log in / Register</button>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;