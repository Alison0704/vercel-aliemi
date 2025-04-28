import React, {useState} from 'react';
import Button from '@/components/Button';
import Me from '@/pages/Home/images/Me.png';
import Adrien from '@/pages/Home/images/Adrien.png';
import Chloe from '@/pages/Home/images/Chloe.png';
import Emily from '@/pages/Home/images/Emily.png';
import Alister from '@/pages/Home/images/Alister.png';

import style from '@/pages/Home/Home.module.css';

const images = [Adrien, Chloe, Emily, Alister];
const defaultImage = Me;


const Home: React.FC = () => {
    const [currentImage, setCurrentImage] = useState<string>(defaultImage);

    const handleMouseEnter = () => {
        // Randomly pick an image from the list
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setCurrentImage(randomImage);
    };

    const handleMouseLeave = () => {
        // Revert to the default image
        setCurrentImage(defaultImage);
    };
    return (
        <div id="home">
            <section className={style.content}>
                <h1>Hello World!</h1>
                <h1><span>I’m M. A. Alison Emilien</span></h1>
                <p>A chip design enthusiast who likes to venture into concept art and music</p>
                <div className={style.imageContainer}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     style={{borderRadius: '50%', overflow: 'hidden', width: '200px', height: '200px'}}>
                    <img className="image"
                         src={currentImage}
                         alt="Hover to change"
                         style={{width: '100%', height: '100%', objectFit: 'cover'}}
                    />
                </div>
                {/*<p className={style.callToAction}>Hover me to see all my personas!</p>*/}
                <div className={style.resumeContainer}>
                <p>Here are my resumes:</p>
                    <div className={style.buttonContainer}>
                        <a href="./resume/Alison_Emilien_ResumeE.pdf" target="_blank" rel="noopener noreferrer">
                            <Button label="Hardware Resume" onClick={function (): void {
                                throw new Error('Function not implemented.');
                            }}></Button>
                        </a>
                        <a href="./resume/Alison_Emilien_Resume_S.pdf"  target="_blank" rel="noopener noreferrer">
                            <Button label="Software Resume" onClick={function (): void {
                                throw new Error('Function not implemented.');
                            }}></Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;