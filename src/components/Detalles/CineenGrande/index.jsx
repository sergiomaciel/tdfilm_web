import Link from "next/link";

// insert image in html.


const CineEnGrande = ({ sections }) => {
  return (
    <section className="hero section-padding position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 offset-lg-1 valign">
            <div className="hero-cont">
              <p className="fw-500 fz-25 mb-10 text-dark">
                <b>¿Qué es?</b>
              </p>
              <p className="fw-500 fz-18 mb-10 text-dark">
                Cine en Grande es un festival de cine nacional que cuenta con 5
                ediciones hasta la fecha. Esta 6ta edición propone exhibiciones
                de largometrajes, cortometrajes y videoclips en competencia, con
                producciones de alcance nacional, y binacional (Región
                Patagónica). También habrá secciones no competitivas, con focos
                de realizaciones fueguinas, de temática Malvinas, y de terror.
                Además acercará a las escuelas un ciclo de contenido ambiental
                para las infancias.
              </p>
              <p className="fw-500 fz-18 mb-10 text-dark">
                Los talleres de formación que se ofrecerán son de Dirección de
                Arte, Actuación frente a cámara y Primeros Auxilios en set de
                rodajes, brindados por diversas asociaciones.
              </p>
              <br />

              <p className="fw-500 fz-25 mb-10 text-dark">
                <b>¿A quién está dirigido?</b>
              </p>
              <p className="fw-500 fz-18 mb-10 text-dark">
                Todas las actividades están destinadas a la comunidad en general
                y a todas las áreas que hacen al sector audiovisual, con acceso
                libre y gratuito.
              </p>
              <br />

              <p className="fw-500 fz-25 mb-10 text-dark">
                <b>¿Dónde y cuándo se realizará?</b>
              </p>
              <p className="fw-500 fz-18 mb-10 text-dark">
                Se llevará a cabo entre el 3 y el 7 de mayo en:
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - Centro Cultural Yaganes (Belgrano 319)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - El Cine Cinemas4 (9 de julio 800)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - UNTDF (Thorne 302)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - IPES Paulo Freire (Estrada 1575)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - Centro Sociocultural Walter Buscemi (F. Minkyol 175)
              </p>
              <br />

              <p className="fw-500 fz-25 mb-10 text-dark">
                <b>CRONOGRAMA DE ACTIVIDADES</b>
              </p>
              <p className="fw-500 fz-20 mb-10 text-dark">
                <b>3 de Mayo</b>
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>11 hs</b> - Taller de Primeros Auxilios para set de rodajes -
                CC Yaganes - Con inscripción previa - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/626747557817"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>14 hs</b> - Proyección de Cortometrajes Nacionales en
                competencia - IPES Paulo Freire - Con inscripción previa
                <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/626756725237"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - AHÍ VIENEN de Pedro Ponce y Lucas García Melo
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - DULCE de José María Carrizo
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - REBELADO de Eduardo Igolnikow
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - ENRIQUETA de Valeria Esther Dana
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - GAMBOTE de Sofia Bensadon
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - EXCELENTISIMA SEÑORA de Ana Sol Alonso - Teresita Cherry
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - SANTA SOMBRA de Paula Boffo + Patricio Palza
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - EL TRUENO de Isabel Titiro
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - LAS PERIPECIAS DEL SEÑOR PERCIVAL de Becho Lo Bianco, Mariano
                Bergara, Javier Mrad
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - PIEDRA MÁGICA de Paula Herrera
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>17 hs</b> - Proyección de Largometraje Nacional en
                competencia, HUSEK de Daniela Seggiaro - Cinemas4 - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627484522097"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>19 hs</b> - Proyección de Largometraje Binacional en
                competencia MANKEWENÜY / AMIGA DEL CÓNDOR de María Manzanares - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/626775722057"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>21 hs</b> - Apertura de 6ta edición Festival de Cine Nacional
                “Cine en Grande” - CC Yaganes
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>22 hs</b> - Proyección “FOCO Malvinas” - CC Yaganes
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - MIRESE AL ESPEJO de Diego Moyano
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - VERDE OLIVA de Daft Rebel
              </p>
              <br />
              <p className="fw-500 fz-20 mb-10 text-dark">
                <b>4 de Mayo</b>
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>10 hs</b> - Taller de Dirección de Arte, brindado por la
                Asociación Argentina de Directores de Arte (AADA) - Universidad
                Nacional de Tierra del Fuego - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627109028987"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>14 hs</b> - Proyección de Largometraje Binacional en
                competencia LAS INTEMPERIES de Guido De Paula - Cinemas4 - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627113442187"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>18 hs</b> - Proyección de Cortometrajes Binacionales
                (Patagónicos) en competencia - IPES - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627120824267"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">- Paulo Freire</p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - LA FLOR EN LA BOCA de Luis Camargo (Tierra del Fuego)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - SHIMAWAIA, RENACER DE LAS CENIZAS de Abel Sberna (Tierra del
                Fuego)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - BIVALVA de Gabriel Montiel (CHILE - Calbuco)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - ACMÉ de Agustín Montagie (Neuquén)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - ISLEÑA de Garcia Bello Viñabal (Tierra del Fuego)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - PÁJARO de Carlos Montoya (Neuquén)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - EL FIN JUSTIFICA LOS MEDIOS de Marcos Montes de Oca (Rio
                Negro)
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>20 hs</b> - Proyecciones FOCO Terror en la ISLA GRANDE -
                Universidad Nacional de Tierra del Fuego - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627131094987"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - PUSSY CAKE de Pablo Parés
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - DEMONIOS 2 de Pablo Olmos Arrayales
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - VEN A JUGAR de Pablo Olmos Arrayales
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>22 hs</b> - Proyección de Largometraje Nacional en
                competencia NUESTRA VENGANZA ES SER FELICES de Malena Villarino
                - Cinemas4 - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627136822117"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - PUSSY CAKE de Pablo Parés
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - DEMONIOS 2 de Pablo Olmos Arrayales
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - VEN A JUGAR de Pablo Olmos Arrayales
              </p>
              <br />
              <p className="fw-500 fz-20 mb-10 text-dark">
                <b>5 de Mayo</b>
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>10 hs</b> - Taller de Dirección de Arte, brindado por la
                Asociación Argentina de Directores de Arte (AADA) - Universidad
                Nacional de Tierra del Fuego
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>14 hs</b> - Proyección de Largometraje Nacional en
                competencia TE PROMETO UNA LARGA AMISTAD de Jimena Repetto -
                Cinemas4 - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627148537157"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>15 hs</b> - Proyección de Cortometrajes Binacionales en
                competencia - IPES Paulo Freire - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627151415767"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - VOLAR de Catherine Mazoyer (CHILE)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - ORO ROJO de Milton Ferreira Monteiro (Tierra del Fuego)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - TOY COMPLICADO de Joaquin Soto (Chubut)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - LA ÚLTIMA CENA de Ángel Ezequiel Paredes (Tierra del Fuego)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - LA NOCHE Y LAS TORMENTAS de Nicolás Deluca y Luján Agusti
                (Tierra del Fuego)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - ANTES DE QUE TE VAYAS de Vicente del Río Laya y Hans Von
                Marées Peede (CHILE - Coyhaique)
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>16 hs</b> - Proyección de Largometraje Binacional en
                competencia EL SOL ES LA ÚNICA SEMILLA de Esteban Santana -
                Cinemas4 - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627156852027"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>17:30 hs</b> - Taller de Actuación frente a cámara, por Lauza
                Azcurra y Agnese Boaretto - Centro Sociocultural Walter Buscemi - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627157875087"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>18 hs</b> - Masterclass: EL SONIDO DEL TERROR con Hernan
                Moyano - Moderan: Noelia Mercado y Andrés Larrahona - CC Yaganes - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627160853997"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>20 hs</b> - Proyecciones FOCO “Terror en la ISLA GRANDE” - CC
                Yaganes - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627162298317"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - LA NOCHE Y LAS TORMENTAS de Nicolás Deluca y Luján Agusti
                (Tierra del Fuego)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - ANTES DE QUE TE VAYAS de Vicente del Río Laya y Hans Von
                Marées Peede (CHILE - Coyhaique)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>22 hs</b> - Proyección Largometraje Nacional en competencia
                ALGO QUE PASÓ EN AÑO NUEVO de Jorge Pinarello - Cinemas4 - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627163862997"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <br />
              <p className="fw-500 fz-20 mb-10 text-dark">
                <b>6 de Mayo</b>
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>11 hs</b> - Taller de Actuación frente a cámara, por Lauza
                Azcurra y Agnese Boaretto - CC Yaganes
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>14 hs</b> - Proyección de Largometraje Nacional en
                competencia ESPLENDOR DE LOS DÍAS VENIDEROS de Miguel Zeballos -
                Cinemas4 - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627168376497"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>16 hs</b> - Proyección de Largometraje Binacional en
                competencia CACIQUE MULATO, LA LEYENDA DE CHUMJALUWUN de Jorge
                Grez - Cinemas4 - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627173802727"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>18 hs</b> - Conversatorio: Ley de Fomento Audiovisual TDF - CC Yaganes
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>19 hs</b> - Proyección de Videoclips Nacionales en
                competencia - Sede a comunicar - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627143592367"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - Viento, Hielo (2022) - Iván Razza (ARG - Ushuaia, Tierra del
                Fuego)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - Sin Combate (2022) - María Manzanares (ARG - Neuquén)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - No lullaby (2022) - Ezequiel Torres (ARG - CABA)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - Alpapuyo (2021) - Fiona Lena Brown y Germán Basso (ARG - CABA)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - Cuadernos de Zambas (2021) - Roly Ruiz (ARG)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - Esmeralda (2022) - Luciana Gómez Frugoni (ARG - Río Grande,
                Tierra del Fuego)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - Puesto pa ti (2023) - Burgos Bautista (ARG - Ushuaia, Tierra
                del Fuego)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - Potatoes - The Mike Cooke Band (2022) - Luis Urquiza (ARG -
                Lago Puelo, Chubut)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - AMÉRIKA (2022) - Eduardo Elli (ARG - Buenos Aires)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - Mueve (2022) - Germán Lopez (ARG - La Plata)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - Concierto para el cosmos (2021) - Ignacio Masllorens (ARG -
                Buenos Aires)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - Ya no (2022) - Franco Fondrini (ARG - General Roca)
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - Bakanería (2021) - Guillermo Leal (ARG - Río Grande, Tierra
                del Fuego)
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>21 hs</b> - Entrega de premios - CC Yaganes - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627143592367"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <br />
              <p className="fw-500 fz-20 mb-10 text-dark">
                <b>7 de Mayo</b>
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>14 hs</b> - Proyección obras ganadoras y sección videoclips
                nacionales CCY - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627182408467"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <br />
              <p className="fw-500 fz-16 mb-10 text-dark">
                <b>19 hs</b> Proyección FOCO “Malvinas - TDF” - CC Yaganes - <a
                  target="_blank"
                  href="https://www.eventbrite.com.ar/e/627184153687"
                  rel="noreferrer"
                >
                  <i className="fa fa-link"> Link</i>
                </a>
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - EN LAS BUENAS Y EN LAS MALAS de Gerardo Merlo
              </p>
              <p className="fw-500 fz-16 mb-10 text-dark">
                - VIGILIA: EL ESTADO DE QUIEN PERMANECE DESPIERTO de Alveré Di
                Pilato
              </p>
              <br />
              <p className="fw-500 fz-25 mb-10 text-dark">
                <b>¿Quiénes lo organizan?</b>
              </p>
              <p className="fw-500 fz-18 mb-10 text-dark">
                Esta edición de Cine en Grande es organizada por la Secretaría
                de Cultura de Tierra del Fuego AIAS, a través de la Dirección
                Provincial de Desarrollo Audiovisual, de manera conjunta con el
                Consejo Federal de Inversiones (CFI). Además, cuenta con el
                apoyo del Instituto Nacional de Cine y Artes Audiovisuales
                (INCAA), la Universidad Nacional de Tierra del Fuego (UNTDF), el
                acompañamiento de asociaciones como: Asociación Civíl del
                Audiovisual Fueguino (ACAF), Asociación Argentina de Directores
                de Arte (AADA), Asociación Argentina de Coloristas (AAC), Cruz
                Roja Argentina y Cine.ar.
              </p>
              <br />
              <Link href="/">
                <a>
                  <img src={`img/banner_cineeengrande.jpg`} alt=""  width="100%" />
                </a>
              </Link>
              <br />

              <p className="fw-500 fz-18 mb-10 text-dark">
                <span className="fz-30">REGLAMENTO</span>
              </p>
              <ul className="rest">
                <li>
                  <a
                    target="_blank"
                    href="https://film.tdf.gob.ar/file/BasesCondiciones-CineenGrande.pdf"
                    rel="noreferrer"
                  >
                    <i className="fa fa-download"> Descargar</i>
                  </a>
                </li>
              </ul>
              <br />
              <p className="fw-500 fz-18 mb-10 text-dark">
                <span className="fz-30">INSCRIPCIÓN</span>
              </p>
              <ul className="rest">
                <li>
                  <a
                    target="_blank"
                    href="https://forms.gle/P7bGXhREnaL3Q2gy9"
                    rel="noreferrer"
                  >
                    <i className="fa fa-calendar"> Formulario</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-pattern bottom left"></div>
    </section>
  );
};

export default CineEnGrande;
