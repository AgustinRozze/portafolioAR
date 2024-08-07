import './Header.css'
function Header() {
    return (
        <>
        <header className="header">
      <a href="#home" className="logo">Agustin <span>Rozze</span></a>

      

      <nav className="navbar">
        <a href="#home" className="active">Inicio</a>
        <a href="#education">Educacion</a>
        <a href="#services">Conocimientos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
        </>
    )
}

export default Header;