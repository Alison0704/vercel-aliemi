import React from 'react';
import style from '@/pages/Work/Work.module.css';
import ListFormat from "@/components/ListFormat";

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
        {id:3, title: 'Teaching assistant - Fundamentals of Engineering Computation', date:'Sept 2024 - Dec 2024'},
        {id:4, title: 'Teaching assistant - Digital System I', date:'Jan 2024 - Apr 2024'},
        {id:5, title: 'Beavertail Staff', date:'Jan 2023 - Apr 2023'},
        {id:6, title: 'Salesgirl', date:'Nov 2018 - Jan 2019'},
        {id:7, title: 'Office Assistant', date:'Nov 2016 - Jan 2017'},
    ]

    return (
        <div id="work">
            {currentSection === 'main' ? (
            <section>
                <h2 className={style.title}>Work Experiences</h2>
                <div className={style.workContent}>
                    {items.map(item => (
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('details'); onNavigateToDetails('work',item.id.toString()); }}>
                            <ListFormat title={item.title} date={item.date} />
                        </a>
                    ))}
                </div>
            </section>
            ):null}
        </div>
    );
};

export default Work;