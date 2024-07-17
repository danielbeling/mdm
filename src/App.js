import './App.css';
import Awards from './components/awards';
import Club from './components/club';
import Extract from './components/extract';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Points from './components/points';
import Rescue from './components/rescue';
import ToUse from './components/touse';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Club />
            <Points />
            <Rescue />
            <Awards />
            <Extract />
            <ToUse />
            <Footer />
        </>
    );
}

export default App;
