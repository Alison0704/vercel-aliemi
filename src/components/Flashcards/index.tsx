import style from './Flashcards.module.css';
import { Cpu, Code, Music, Palette } from 'lucide-react'; // Import icons

interface CardData {
    title: string;
    description: string;
    icon: JSX.Element;
    link: string;
}

const cards: CardData[] = [
    { title: 'Hardware', icon: <Cpu size={40} />, description: 'Chip design, Verilog, embedded systems.',link: 'https://github.com/Alison0704/electrical-projects' },
    { title: 'Software', icon: <Code size={40} />, description: 'Web development, automation, tools.',link: 'https://github.com/Alison0704/software-projects'},
    { title: 'Music', icon: <Music size={40} />, description: 'Piano compositions, digital audio work.',link: 'https://github.com/Alison0704/music-projects' },
    { title: 'Digital Art', icon: <Palette size={40} />, description: 'Concept design, illustrations, and more.',link: 'https://github.com/Alison0704/music-projects'},
];

export default function FlashCards() {
    return (
        <section>
            <h2>Projects</h2>
            <div className={style.cardContainer}>
                {cards.map((card, index) => (
                    <a href={card.link} target='_blank'>
                        <div className={style.card} key={index}>
                            <div className={style.cardInner}>
                                <div className={style.cardFront}>
                                    <div className={style.icon}>{card.icon}</div>
                                    <h3>{card.title}</h3>
                                </div>
                                <div className={style.cardBack}>
                                    <p className={style.description}>{card.description}</p>
                                    <p><span>Select me for more details</span></p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
