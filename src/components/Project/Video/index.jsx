import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import parallaxie from '../../../common/parallaxie';

const Video = ({ item }) => {
  const router = useRouter();
  const bg = `${router.basePath}/${item?.image ?? "img/films/default.jpg"}`
  console.log(bg);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    new parallaxie('.video-wrapper.bg-img.parallaxie');
  }, []);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <section>
      <div className="container-fluid">
        <div className="video-wrapper section-padding bg-img parallaxie valign" data-background={bg} data-overlay-dark="4">
          <div className="full-width text-center">
            <a href="https://youtu.be/AzwC6umvd1s" className="vid" onClick={openVideo}>
              <div className="vid-butn">
                <span className="icon">
                  <i className="fas fa-play"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
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
    </section>
  )
}

export default Video