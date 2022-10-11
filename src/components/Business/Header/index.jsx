import { useState, useEffect } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import parallaxie from '../../../common/parallaxie';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    new parallaxie('header .background.bg-img.parallaxie');
  }, []);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <header className="home-bus1 position-re">
      <div className="background bg-img parallaxie valign" data-background="img/slider/d3.jpg" data-overlay-dark="5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <div className="caption">
                <h6 className="sub-title fw-400 fz-12 radius-30">We are a creative studio.</h6>
                <h1>Better design for your digital products.</h1>
                <a href="#0" className="butn butn-md butn-rounded butn-light mt-30">
                  <span className="text">Purchase Now</span>
                </a>
              </div>
            </div>
            <div className="col-md-2 offset-lg-2 valign">
              <div className="full-width text-center">
                <div className="play-button">
                  <a href="https://youtu.be/AzwC6umvd1s" className="vid" onClick={openVideo}>
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="curve-buttom">
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="1920" height="217"
          viewBox="0 0 1920 217">
          <g fillRule="evenodd" transform="matrix(-1 0 0 1 1920 0)">
            <path
              d="M0,57.46875 C203.364583,135.217754 494.835938,156.564108 874.414062,121.507813 C1192.61198,-13.9827666 1541.14063,-35.3291208 1920,57.46875 L1920,207 L0,207 L0,57.46875 Z"
              opacity=".3"></path>
            <path
              d="M0,79 C292.46875,165.453125 612.46875,165.453125 960,79 C1307.53125,-7.453125 1627.53125,-7.453125 1920,79 L1920,207 L0,207 L0,79 Z"
              opacity=".6"></path>
            <path
              d="M0,89 C288.713542,146.786458 608.713542,146.786458 960,89 C1311.28646,31.2135417 1631.28646,31.2135417 1920,89 L1920,217 L0,217 L0,89 Z">
            </path>
          </g>
        </svg>
      </div>
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="AzwC6umvd1s"
              onClose={() => setOpen(false)}
            />
          )
      }
    </header>
  )
}

export default Header