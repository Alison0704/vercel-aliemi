import React from 'react';
import style from '@/pages/Project/Project.module.css';

const Project: React.FC = () => {
    const items = [
        { id: 1, label: 'Hardware Projects', link: 'https://github.com/Alison0704/electrical-projects', text:"Designed and implemented hardware-focused projects integrating digital logic, embedded systems, and automation to solve real-world engineering challenges."},
        { id: 2, label: 'Software Projects', link: 'https://github.com/Alison0704/software-projects',text:"A showcase of innovative software projects demonstrating practical problem-solving, efficient design, and real-world application." },
        { id: 3, label: 'Music Projects',  link: 'https://github.com/Alison0704/music-projects',text:"Showcasing a blend of creativity and technical skill, my music projects feature original compositions, piano arrangements, and experimental sound design." },
        { id: 4, label: 'Art Projects',link: 'https://www.instagram.com/aliartsy_space/',text:"A collection of imaginative art projects exploring unique characters, vibrant worlds, and expressive storytelling through digital illustration."},
    ];

    return (
        <div id = "project">
            <div className={style.grid}>
                <section>
                    <h2>Projects</h2>
                    <div className={style.gridContainer}>
                        {items.map((item) => (
                            <a href={item.link} target='_blank'>
                                <div key={item.id} className={style.container}>
                                    <div className={style.content}>
                                        <h3 className={style.title}>{item.label}</h3>
                                        <div className={style.text}>
                                            <p>{item.text}</p>
                                            <p><span>Click me to see more</span></p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
            <div className={style.rows}>
                <section>
                <h2>Projects</h2>
                <div className={style.rowContainer}>
                {items.map((item) => (
                        <a href={item.link} target='_blank'>
                                <div className={style.item} key={item.id}>
                                    <h4 key={item.id}>{item.label}</h4>
                                    <p key={item.id}>{item.text}</p>
                                    <p className={style.callToAction}><span>Tap me for more details</span></p>
                                </div>
                        </a>
                ))}
                </div>
                </section>
            </div>
        </div>

    );
};

export default Project;