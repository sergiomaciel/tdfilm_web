import services from "../../../data/business/services.json";

const Services = () => {
  return (
    <section className="services section-padding pt-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="round-head text-center mb-80">
              <h6 className="ls2 text-u fz-13 fw-600 mb-20 gr-green-text rest">Best Features</h6>
              <h3 className="fw-700">Designed For You</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {
            services.map(service => (
              <div className="col-lg-4" key={service.id}>
                <div className="item shadw bord text-center">
                  <div className="icon fz-50 mb-15 rest">
                    <span className={`${service.icon} gr-green-text`}></span>
                  </div>
                  <h6 className="mb-15">{ service.title }</h6>
                  <p>{ service.detials }</p>
                  <div className="tag mt-30">
                    {
                      service.tags.map((tag, i) => (
                        <a href="#0" className="me-1" key={i}>
                          <span>{ tag }</span>
                        </a>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services