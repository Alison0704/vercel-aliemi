import React from 'react';
import style from '@/pages/Characters/Characters.module.css';
import Adrien from '@/pages/Characters/images/Adrien.png';
import Chloe from '@/pages/Characters/images/Chloe.png';
import Emily from '@/pages/Characters/images/Emily.png';
import Alister from '@/pages/Characters/images/Alister.png';

const Characters: React.FC = () => {

    return (
        <div className={style.containerWidth}>
        <div id="characters" className={style.container}>
            {/*------------------------------Character: section*------------------------------*/}
            <div className={style.content}>
                <a className={style.button} href="#popup1">
                    <div className={style.image}
                         style={{borderRadius: '50%', overflow: 'hidden', width: '120px', height: '120px'}}>
                        <img className="image"
                             src={Adrien}
                             style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        />
                    </div>
                </a>

                <div id="popup1" className={style.overlay}>
                    <div className="popup">
                        <h2>Here i am</h2>
                        <a className={style.close} href="#">&times;</a>
                        <div className={style.text}>
                            Thank to pop me out of that button, but now i'm done so you can close this window.
                        </div>
                    </div>
                </div>
                {/*----------------------------------------------------------------------*/}
                {/*Character: section*/}
                <div className={style.image}
                     style={{borderRadius: '50%', overflow: 'hidden', width: '120px', height: '120px'}}>
                    <img className="image"
                         src={Chloe}
                         style={{width: '100%', height: '100%', objectFit: 'cover'}}
                    />
                </div>
                {/*------------------------------Character: section*------------------------------*/}
                <div className={style.image}
                     style={{borderRadius: '50%', overflow: 'hidden', width: '120px', height: '120px'}}>
                    <img className="image"
                         src={Emily}
                         alt="Hover to change"
                         style={{width: '100%', height: '100%', objectFit: 'cover'}}
                    />
                </div>
                {/*------------------------------Character: section*------------------------------*/}
                <div className={style.image}
                     style={{borderRadius: '50%', overflow: 'hidden', width: '120px', height: '120px'}}>
                    <img className="image"
                         src={Alister}
                         alt="Hover to change"
                         style={{width: '100%', height: '100%', objectFit: 'cover'}}
                    />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Characters;