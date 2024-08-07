import './Contact.css'
function Contact() {
    return(
        <>
        <section class="contact" id="contact">
      <h2 class="heading">contacta<span>me</span></h2>
      <form action="https://formsubmit.co/rozzeagustin@gmail.com" method="POST">
        <div class="input-group">
          <div class="input-box">
            <input type="text" placeholder="nombre completo" name='nombre'/>
            <input type="email" placeholder="email" name='email' />
          </div>
          <div class="input-box">
            <input type="number" name='numero de telefono' placeholder="numero de telefono" />
            <input type="text" placeholder="asunto" name='asunto'/>
            
          </div>
        </div>
        <div class="input-group-2">
          <textarea
            name="asunto"
            id=""
            cols="30"
            rows="10"
            placeholder="tu mensaje"
          ></textarea>
          <input type="submit" value="enviar" class="btn" />
          <input type="hidden" name='_next' value='http://localhost:5173' />
          <input type="hidden" name='_captcha' value='false' />
        </div>
      </form>
    </section>
        </>
    )
}
export default Contact;