import React from 'react';
import style from '@/pages/About/About.module.css';
//TODO: update about me
const About: React.FC = () => {
    return (
        <div id="about">

            <div className={style.container}>
                {/*whoami*/}
                <div className={style.terminalLine}>whoami</div>
                <p>aliemi</p>
                <div className={style.comment}># Full name: Marie Annaëlle Alison Emilien</div>
                {/*origins*/}
                <div className={style.terminalLine}>links <a href={"https://en.wikipedia.org/wiki/Mauritius"} target={"_blank"}>https://en.wikipedia.org/wiki/Mauritius</a></div>
                {/* biography */}
                <div className={style.terminalLine}>cat background.txt</div>
                <div className={style.multiResult}>Proud mixed-race and trilingual (English, French, Mauritian Creole) Mauritian</div>
                <div className={style.multiResult}>Driven by curiosity, compassion, and a desire to create meaningful impact through technology and design</div>
                <div className={style.multiResult}>Believer in learning by doing — always exploring, building, and improving</div>

                {/* strength */}
                <div className={style.terminalLine}>cat strength.txt</div>
                <div className={style.multiResult}>Relentlessly resourceful and solutions-oriented, especially under pressure</div>
                <div className={style.multiResult}>Highly adaptable and always eager to learn new tools, languages, and concepts</div>

                {/* weakness */}
                <div className={style.terminalLine}>cat weakness.txt</div>
                <div className={style.multiResult}>Can get too absorbed in details, occasionally losing track of the bigger picture</div>
                <div className={style.multiResult}>Tends to overthink decisions when under time constraints</div>

                <div className={style.terminalLine}>shred weakness.txt</div>
                <div className={style.terminalLine}>cat weakness.txt</div>
                <p>?ˏN?????H??4?0?[wtɱ½????#'%?,?aAJ????Og????&?jrMky???E@A??3d?E?rO??????Å	h$??#?RaC???Y??^Z?i?_??jDԲ$???^???-??ī</p>
                <p>?rO??????Å	h$?0?[wt#?RaC0?[???#'%#?RaC???Y??^Z#?RaC???Y??^Z ?y???E@A _??jDԲ$????H??4?0?[wtɱ½??Y??^Z?i?_??jDԲ</p>

                {/* interests */}
                <div className={style.terminalLine}>cat interests.txt</div>
                <div className={style.multiResult}>Chip design, embedded systems, and the intersection of hardware and software</div>
                <div className={style.multiResult}>Creating digital art and characters in Clip Studio Paint</div>
                <div className={style.multiResult}>Playing piano and revisiting athletic roots in javelin and shot put</div>

                {/* philosophy */}
                <div className={style.terminalLine}>cat philosophy.txt</div>
                <div className={style.multiResult}>Build with purpose. Learn with intent. Fail forward.</div>
                <div className={style.multiResult}>Complex problems deserve thoughtful, elegant solutions — both in code and in life.</div>
                <div className={style.multiResult}>Technology should empower people, not overwhelm them.</div>

                {/* setup */}
                <div className={style.terminalLine}>cat setup.sh</div>
                <div className={style.multiResult}>#!/bin/bash</div>
                <div className={style.multiResult}># Dev environment & tools</div>
                <div className={style.multiResult}>alias editor='code'</div>
                <div className={style.multiResult}>export LANGUAGES="C Verilog Python TypeScript Bash"</div>
                <div className={style.multiResult}>export TOOLS="ModelSim Quartus Vivado Cadence VSCode Git"</div>
                <div className={style.multiResult}>export STACK="React + Vite + Tailwind + Node.js"</div>
                <div className={style.multiResult}>export OS="macOS + Linux (WSL)"</div>
                <div className={style.multiResult}>export HOBBIES="Digital Art Music Athletics Automation"</div>
                <div className={style.multiResult}>echo "Environment ready. Time to build something great."</div>

            </div>
        </div>
    );
};

export default About;