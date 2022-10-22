/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import slugify from "slugify";
import Link from 'next/link';
import initIsotope from '../../../common/initIsotope';
import data from '../../../data/locaciones.json';

import Tilt from 'react-parallax-tilt';


const Grid = () => {
  useEffect(() => {
    //= Init Isotope
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section className="portfolio section-padding pt-60">
      <div className="container-fluid">
        <div className="wild-padding">
          <div className="gallery col-12 rest">
            <div className="row">
              {
                data.zona.map((item, index) => (
                  
                    <Tilt key={index} className="col-lg-4 col-md-6 hover3d" tiltMaxAngleY={10} tiltMaxAngleX={10} u>
                      <div className="feat-item-img hover3d-child bg-img d-flex align-items-end" style={{ backgroundImage: `url(${item.img})` }} data-overlay-dark="2">
                        <div className="cont">
                        <h6 className="fz-20"><a href={`/locaciones/${item.name}`}>{ item.name }</a></h6>
                        <Link key={index} href={`/locaciones/${item.name}`}>
                          <span className="fz-14 opacity-8 mb-5">
                            Más Información
                          </span>
                        </Link>
                        </div>
                      </div>
                      <br />
                    </Tilt>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grid