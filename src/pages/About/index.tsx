import React from 'react';
import style from '@/pages/About/About.module.css';

const About: React.FC = () => {
    return (
        <div id="about">
            <div className={style.container}>
                <p>***This is temporary***</p>


                <div className="terminal-line">whoami</div>
                <p>Alison Emilien</p>

                <div className="terminal-line">echo "Location"</div>
                <p>Port-Louis, Mauritius</p>

                <div className="terminal-line">cat interests.txt</div>
                <ul>
                    <li>Drawing animal and human anatomy</li>
                    <li>Learning new art techniques</li>
                    <li>Exploring creative storytelling</li>
                </ul>

                <div className="terminal-line">cat bio.txt</div>
                <p>
                    I’m passionate about improving my art, especially anatomy-focused work. I love observing people and
                    animals, and turning that into expressive drawings.
                </p>

                <div className="terminal-line">echo "Fun Fact"</div>
                <p>
                    I often sketch while listening to music or creative podcasts!
                </p>

                <div className="terminal-line">open linkedin.com/in/yourprofile</div>
                <p><a href="https://www.linkedin.com/in/alison-emilien/" target="_blank">LinkedIn Profile</a></p>

                <p className="comment"># This page simulates a terminal interface</p>

            </div>
        </div>
    );
};

export default About;