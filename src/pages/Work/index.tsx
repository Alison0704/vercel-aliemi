import React from 'react';
import style from '@/pages/Work/Work.module.css';

type DetailType = "work" | "academics";

type NavBarProps = {
    currentSection: 'main' | 'about' | 'details';
    onNavigate: (section: 'main' | 'about' | 'details') => void;
    onNavigateToDetails: (type: DetailType, id: string) => void;
};

const Work: React.FC<NavBarProps> = ({ currentSection, onNavigate, onNavigateToDetails }) => {
    const items = [
        {id:1, title: 'Pension and Benefits Assistant', date:'May 2023 - Apr 2025'},
        {id:2, title: 'Teaching assistant - Digital System I', date:'Jan 2025 - Apr 2025'},
        {id:3, title:'Teaching assistant - Fundamentals of Engineering Computation', date:'Sept 2024 - Dec 2024'},
        {id:4, title: 'Teaching assistant - Digital System I', date:'Jan 2024 - Apr 2024'},
        {id:5, title: 'Beavertail Staff', date:'Jan 2023 - Apr 2023'},
    ]

    return (
        <div id="work">
            {currentSection === 'main' ? (
            <section>
                <h2>Work Experiences</h2>
                <div className={style.content}>
                    {items.map(item => (
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('details'); onNavigateToDetails('work',item.id.toString()); }}>
                            <div className={style.item} key={item.id}>
                                <h4 key={item.id}>{item.title}</h4>
                                <p key={item.id}>{item.date}</p>
                                <p className={style.callToAction}><span>Click me for more details</span></p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

                ):null}
        </div>
    );
};

export default Work;