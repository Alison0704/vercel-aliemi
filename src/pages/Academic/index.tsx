import React from 'react';
import style from '@/pages/Academic/Academic.module.css';

type DetailType = "work" | "academics";

type NavBarProps = {
    currentSection: 'main' | 'about' | 'details';
    onNavigate: (section: 'main' | 'about' | 'details') => void;
    onNavigateToDetails: (type: DetailType, id: string) => void;
};

const Academic: React.FC<NavBarProps> = ({ currentSection, onNavigate, onNavigateToDetails }) => {
    const items = [
        {id:1, title: 'University of Ottawa - BASc Electrical Engineering and BSc Computing Technology', date:'Sept 2020 - May 2026'},
        {id:2, title: 'GMD Atchia State College - Science Side O & A level Cambridge', date:'Jan 2012 - Oct 2019'},
    ]
    return (
        <div id="academic">
            {currentSection === 'main' ? (
                    <section>
                        <h2>Academic Experiences</h2>
                        <div className={style.content}>
                            {items.map(item => (
                                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('details'); onNavigateToDetails('academics', item.id.toString()); }}>
                                <div className={style.item} key={item.id}>
                                    <h4 key={item.id}>{item.title}</h4>
                                    <p key={item.id}>{item.date}</p>
                                    <p className={style.callToAction}>Click me for more details</p>
                                </div>
                                </a>
                            ))}
                        </div>
                    </section>
                ) : null}
        </div>
    );
};

export default Academic;