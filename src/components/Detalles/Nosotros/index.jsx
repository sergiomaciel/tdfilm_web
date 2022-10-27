const Nosotros = ({sections}) => {
  return (
    <section className="hero section-padding position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 offset-lg-1 valign">
            <div className="hero-cont">
              {
                sections?.map((item, index) => (
                  <><p key={index} className="fw-500 fz-18 mb-10 text-dark">{item}</p><br /></>
                ))
              }
              <p className="fw-500 fz-18 mb-10 text-dark"><span className="fz-30">T</span>ierra del Fuego Film Commission tiene por objetivo facilitar a las productoras locales, nacionales e internacionales la realización de producciones audiovisuales en la provincia. </p>
              <br />
              <p className="fw-500 fz-18 mb-10 text-dark">Ofrece herramientas y servicios gratuitos, como asesoramiento para facilitar la toma de decisiones relativas a un rodaje,  tramitación de permisos, vinculación con profesionales, servicios locales y productoras afines en pos de lograr una optimización de recursos materiales, humanos y económicos.  </p>
              <br />
              <p className="fw-500 fz-18 mb-10 text-dark">La isla de Tierra del Fuego, puerta de entrada a la Antártida, está ubicada en el extremo sur de la Patagonia. Un lugar versátil con variedad de escenarios míticos y maravillosos que cuentan con las 4 estaciones del año.</p>
              <br />
              <p className="fw-500 fz-18 mb-10 text-dark">Fue elegida por productores de todo el mundo como Wong Kar Wai, Alejandro G. Iñarritu, Werner Herzog, BBC, National Geographics, ESPN, Canon, Burguer King, Moncler, Taratuto, Burman, Sorín, entre muchos otros, debido a sus posibilidades y el exponencial crecimiento técnico y profesional de la industria local. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-pattern bottom left"></div>
    </section>
  )
}

export default Nosotros