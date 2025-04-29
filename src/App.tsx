import { useEffect, useState } from 'react';
import NavBar from '@/components/Navbar';
import Home from '@/pages/Home';
import Project from '@/pages/Project';
import Work from '@/pages/Work';
import Academic from '@/pages/Academic';
import Contact from '@/pages/Contact';
import './index.css';
import About from "@/pages/About";
import Details from "@/components/Details";
import Loading from '@/components/Loading';

function App() {
    const [section, setSection] = useState<'main' | 'about' | 'details'>('main');
    type DetailType = "work" | "academics";
    const [detailsType, setDetailsType] = useState<DetailType | null>(null);
    const [detailsId, setDetailsId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const html = document.documentElement;
        if (section === 'about' || section === 'details') {
            html.style.backgroundColor = '#000';
        } else {
            html.style.backgroundColor = '';
        }
    }, [section]);

    const handleNavigateToDetails = (type: DetailType, id: string) => {
        setDetailsType(type);
        setDetailsId(id);
        setSection('details');
    };

    // Wait for everything to load including images/video
    useEffect(() => {
        const handleLoaded = () => {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        };

        if (document.readyState === 'complete') {
            handleLoaded();
        } else {
            window.addEventListener('load', handleLoaded);
        }

        return () => window.removeEventListener('load', handleLoaded);
    }, []);

    if (loading) return <Loading />;

    return (
        <>
            <NavBar currentSection={section} onNavigate={setSection} />
            {section === 'main' && (
                <main>
                    <Home />
                    <Project />
                    {/*TODO: Eventually add all characters in 1 div with icons; have a pop up window to describe them*/}
                    <Work currentSection={section} onNavigate={setSection} onNavigateToDetails={handleNavigateToDetails} />
                    <Academic currentSection={section} onNavigate={setSection} onNavigateToDetails={handleNavigateToDetails}/>
                    <Contact />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="background"
                        src="/background.mp4"
                        onCanPlayThrough={() => console.log('Video ready')} // optional debugging
                    />
                </main>
            )}
            {section === 'about' && <About />}
            {section === 'details' && detailsType && detailsId && (
                <Details type={detailsType} id={detailsId} />
            )}
        </>
    );
}

export default App;
