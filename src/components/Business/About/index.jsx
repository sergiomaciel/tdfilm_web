/* eslint-disable @next/next/no-img-element */
import aboutData from '../../../data/business/about.json';

const About = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 md-mb50">
            <div className="hero-two-img">
              <div className="img1">
                <img src={aboutData.image1} alt="" />
              </div>
              <div className="img2">
                <img src={aboutData.image2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2 valign">
            <div>
              <h3 className="mb-20">Our purpose is to deliver excellence in service and execution</h3>
              <p>{ aboutData.text }</p>
              <p className="pt-30 mt-30 bord-thin-top">{ aboutData.text }</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About