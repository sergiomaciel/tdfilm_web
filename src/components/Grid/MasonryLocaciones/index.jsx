/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import initIsotope from '../../../common/initIsotope';
import data from '../../../data/locaciones.json';

const Grid = ({zona}) => {
  useEffect(() => {
    //= Init Isotope
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  const router = useRouter();
  const locaciones = data.locaciones.filter(x => x.zona === zona?.name);

  return (
    <section className="portfolio section-padding pt-60">
      <div className="container-fluid">
        <div className="row">
          <div className="filtering d-flex justify-content-center col-12 mb-10">
            <div className="filter">
              {
                locaciones.length > 0 && data.filters.map((item, index) => (
                  <span data-filter={item.operator} className={index == 0 ? 'active':''} key={index}>{item.title}</span>
                ))
              }
            </div>
          </div>
        </div>

        <div className="gallery col-12 rest">
          <div className="row">
            {
              locaciones.map((item, index) => (
                <div className={`col-lg-4 col-md-6 items mt-30 md-getter ${item.type} wow fadeInUp`} data-wow-delay=".4s" key={index}>
                  <div className="item-img colorful-cont">
                    <Link href="#">
                      <a className="imago wow">
                        <img src={item.image} alt="image" />
                        <div className="item-img-overlay"></div>
                      </a>
                    </Link>
                    <div className="cont">
                      {/* <Link href="#">
                        <a className="icon">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </Link> */}
                      <div>
                        <p>{ item.type }</p>
                        <h6 className="fw-500">
                          <Link href="#"><a>{ item.title }</a></Link>
                        </h6>
                      </div>
                      <div className="bg-gr gr-purple-red-bg"></div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grid