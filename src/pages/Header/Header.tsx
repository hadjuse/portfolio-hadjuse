import '../../assets/css/header.css'
export default function Header() {
    return (
        <>
            <header className="App-header">
                <nav className="App-nav">
                    <ul>
                        <li><a href={'#Home'}>Home</a></li>
                        <li><a href={'#About'}>About</a></li>
                        <li><a href={"#Portfolio"}>Portfolio</a></li>
                        <li><a href={"#Contact"}>Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}