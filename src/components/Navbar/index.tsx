import React from 'react';
import style from './Navbar.module.css';

type NavBarProps = {
    currentSection: 'main' | 'about' | 'details';
    onNavigate: (section: 'main' | 'about' | 'details') => void;
};

const NavBar: React.FC<NavBarProps> = ({ currentSection, onNavigate }) => {
    return (
        <>
        <div className={style.navbar}>
                {currentSection === 'main' ? (
                    <div className={style.main}>
                        <div className={style.nav}>
                            <ul>
                                <li><a  className={style.underlineHover} href="#">Home</a></li>
                                <li>
                                    <a  className={style.underlineHover} href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>
                                        About me
                                    </a>
                                </li>
                                <li><a className={style.underlineHover} href="#project">Projects</a></li>
                                <li><a className={style.underlineHover} href="#work">Experiences</a></li>
                                <li><a className={style.underlineHoverContact} href="#contact"><span>Contact me</span></a></li>
                            </ul>
                        </div>
                        <div className={style.smallTitle}>AliEmi's Portfolio website</div>
                    </div>

                ):(
                    <div className={style.others}>
                        <ul>
                            <li>
                                <div className={style.otherSection}>
                                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('main'); }}>
                                        Back to Home
                                    </a>
                                </div>

                            </li>
                        </ul>
                    </div>
                )}
        </div>
        </>
    );
};

export default NavBar;
