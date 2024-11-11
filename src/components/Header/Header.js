import logo from './logo.svg';

const Header = () => {
    return ( 
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="logo"><img src={logo} alt="" className="logo__img" /></a>

                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item"><a href="" className="menu__list-link"></a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link"></a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link"></a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link"></a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link"></a></li>
                        </ul>
                    </nav>

                    <div className="header__buttons">
                        <button className="header__btn"></button>
                        <button className="header__btn"></button>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;