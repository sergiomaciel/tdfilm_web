import { useEffect } from 'react';
import parallaxie from '../../../common/parallaxie';

const Header = ({ title, subTitle = null, bg }) => {
  useEffect(() => {
    new parallaxie('.pg-header-bus.bg-img.parallaxie');
  }, []);

  return (
    <header className="pg-header-bus bg-img parallaxie valign" data-background={bg} data-overlay-dark="2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="caption text-center">
              <h1 className="fz-60 fw-600">{title }</h1>
              <h3 className="fz-25 fw-400">{subTitle}</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header