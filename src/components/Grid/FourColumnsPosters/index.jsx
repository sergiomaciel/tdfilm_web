/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import slugify from "slugify";
import Link from 'next/link';
import initIsotope from '../../../common/initIsotope';
import data from '../../../data/produciones.json';

const Grid = () => {
  useEffect(() => {
    //= Init Isotope
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section className="portfolio section-padding pt-50">
      <div className="container-fluid">
        <div className="row">
          <div className="filtering d-flex justify-content-center col-12 mb-10">
            <div className="filter">
              {
                data.filters.map((filter, index) => (
                  <span data-filter={filter.operator} className={index == 0 ? 'active':''} key={index}>{ filter.title }</span>
                ))
              }
            </div>
          </div>
        </div>
        <div className="wild-padding">
          <div className="gallery col-12 rest">
            <div className="row">
              {
                data.films.map((item, index) => (
                  <div className={`col-lg-3 col-md-6 items md-getter ${item.caegory.join(" ")} wow fadeInUp`} data-wow-delay=".4s" key={index}>
                    <div className="item-img">
                      <Link href={`/produccion/${slugify(item.title).toLowerCase()}`}>
                        <a className="imago wow">
                          <img src={item.image ?? "img/films/default.jpg"} alt="image" style={{ width: 400, height: 600 }}/>
                          {/* <div className="item-img-overlay"></div> */}
                        </a>
                      </Link>
                    </div>
                    <div className="cont mt-30 text-center">
                      <h6 className="fw-500">{ item.title.toUpperCase() } - { item.year } </h6>
                      <p>{ item.caegory.join(", ") }</p>
                    </div>
                  </div>
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