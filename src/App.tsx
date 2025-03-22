import "./App.css";
import "./assets/css/Orb.css";
import Header from "./pages/Header/Header.tsx";
import Particles from "./components/backgrounds/particles/Particles.tsx";
import Hero from "./pages/Hero/Hero.tsx";

function App() {


    return (
        <>
            <Particles />
            <Header />
            <Hero />
        </>
    );
}

export default App;
