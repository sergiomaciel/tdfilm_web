import { useEffect } from 'react';
import parallaxie from '../../../common/parallaxie';

const Header = ({ bg }) => {
  useEffect(() => {
    new parallaxie('.pg-header-bus.bg-img.parallaxie');
  }, []);

  return (
    <header className="pg-header-bus bg-img parallaxie valign" data-background={bg} data-overlay-dark="5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="caption text-center">
              <h6 className="sub-title fw-400">Learn more about Ravo template</h6>
              <h1 className="fz-60 fw-600">We are a creative <br /> design studio.</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header