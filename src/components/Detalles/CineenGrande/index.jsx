import Link from 'next/link';

const CineEnGrande = ({sections}) => {
  return (
    <section className="hero section-padding position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 offset-lg-1 valign">
            <div className="hero-cont">
              <p className="fw-500 fz-18 mb-10 text-dark"><span className="fz-30">6to FESTIVAL DE CINE NACIONAL EN TIERRA DEL FUEGO</span></p>
              <p className="fw-500 fz-18 mb-10 text-dark">El Festival se propone acercar producciones nacionales independientes al público local para formar un espectador crítico y futuros creadores de contenidos.
                De esta manera, se intenta generar una comunidad participativa que pueda, a través del lenguaje audiovisual, pensar y tomar partido sobre cuestiones vinculadas al crecimiento de la región.</p>
              <br />
              <p className="fw-500 fz-18 mb-10 text-dark"><b>PROGRAMACIÓN</b></p>
              <p className="fw-500 fz-18 mb-10 text-dark">La programación apunta a presentar un panorama heterogéneo y enriquecedor de la producción argentina actual, abarcando desde grandes títulos hasta algunas producciones que no han contado con una distribución amplia a nivel nacional.
              Con este criterio se busca apelar a públicos diversos, a través de una propuesta integral y variada en términos de géneros cinematográficos, temáticas y escalas de producción.</p>
              <br />
              <p className="fw-500 fz-18 mb-10 text-dark"><b>FUNDAMENTOS DEL FESTIVAL</b></p>
              <p className="fw-500 fz-18 mb-10 text-dark">Cine en Grande nace en el 2014, con el propósito de acercar la cinematografía argentina a la isla de Tierra del Fuego, generar encuentros entre profesionales y fomentar la industria audiovisual en la región. Año tras año, se ha ido consolidando como espacio clave para exhibir el contenido producido en la región y como encuentro entre los distintos profesionales del país.</p>
              <br />
              <p className="fw-500 fz-18 mb-10 text-dark"><span className="fz-30">REGLAMENTO</span></p>              
              <ul className="rest">
                <li>
                  <a target="_blank" href="https://film.tdf.gob.ar/file/BasesCondiciones-CineenGrande.pdf" rel="noreferrer"><i className="fa fa-download"> Descargar</i></a>
                </li>
              </ul>
              <br />
              <p className="fw-500 fz-18 mb-10 text-dark"><span className="fz-30">INSCRIPCIÓN</span></p>              
              <ul className="rest">
                <li>
                  <a target="_blank" href="https://forms.gle/P7bGXhREnaL3Q2gy9" rel="noreferrer"><i className="fa fa-calendar"> Formulario</i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-pattern bottom left"></div>
    </section>
  )
}

export default CineEnGrande