import "./App.css";
import "./assets/css/Orb.css";
import Header from "./pages/Header.tsx";
import Particles from "./components/backgrounds/particles/Particles.tsx";
import Hero from "./pages/Hero.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

function App() {
    return (
        <BrowserRouter>
            <Particles />
            <Header />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;