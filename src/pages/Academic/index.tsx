import React from 'react';
import style from '@/pages/Academic/Academic.module.css';
import ListFormat from "@/components/ListFormat";

type DetailType = "work" | "academics";

type NavBarProps = {
    currentSection: 'main' | 'about' | 'details';
    onNavigate: (section: 'main' | 'about' | 'details') => void;
    onNavigateToDetails: (type: DetailType, id: string) => void;
};

const Academic: React.FC<NavBarProps> = ({ currentSection, onNavigate, onNavigateToDetails }) => {
    const items = [
        {id:1, title: 'University of Ottawa - BASc Electrical Engineering and Computing Technology', date:'Sept 2020 - May 2026', type: 'Undergraduate'},
        {id:2, title: 'GMD Atchia State College - Science Side O & A level Cambridge', date:'Jan 2012 - Oct 2019', type: 'High School'}
    ]

    return (
        <div id="academic">
            {currentSection === 'main' ? (
                    <section>
                        <h2>Academic Experiences</h2>
                        <div className={style.academicContent}>
                            {items.map(item => (
                                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('details'); onNavigateToDetails('academics',item.id.toString()); }}>
                                    <ListFormat title={item.title} date={item.date} />
                                </a>
                            ))}
                        </div>
                    </section>
                ) : null}
        </div>
    );
};

export default Academic;