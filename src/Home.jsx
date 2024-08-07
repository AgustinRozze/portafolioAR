import './Home.css'
function Home () {
    return(
        <>
         <section className="home" id="home">
      <div className="home-content">
        <h1>Hola! Me llamo  <span>Agustin</span></h1>
        <h3 className="text-animation">Mis conocimientos son: <span></span></h3>
        <p>
        Hola, mi nombre es Agustín Rozze, nací en 2005 en Córdoba,
         Argentina. Actualmente, me encuentro estudiando programación
          y tengo un sólido conocimiento en el desarrollo web front end.
          He trabajado en diversos proyectos, aplicando mis habilidades
           en HTML, CSS, JavaScript y React para crear soluciones web efectivas.
            Estoy comprometido en seguir desarrollándome profesionalmente y en 
            enfrentar nuevos desafíos que me permitan crecer en el campo del
             desarrollo web
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/agustin-rozze-849453285/"><i class="bx bxl-linkedin"></i></a>
          <a href="https://github.com/AgustinRozze"><i class="bx bxl-github"></i></a>
          <a href="#contact"><i  class='bx bxs-contact'></i></a>
          
        </div>

       
      </div>
      <div className="home-img">
        <img src="src/photos/fotoduolingo.png" alt="" />
      </div>
    </section>
        </>
    )
}

export default Home;