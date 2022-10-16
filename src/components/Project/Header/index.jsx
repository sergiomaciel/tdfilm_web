import { useRouter } from "next/router";

const Header = ({ item }) => {

  const router = useRouter();
  const img = `${router.basePath}/${item.image}`

  return (
    <section className="works-header bg-img parallaxie d-flex align-items-end" style={{ backgroundImage: `url(${img})` }} data-overlay-dark="1">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont mb-40">
              <h1>{ item.title }</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item mt-30">
              <h5>Director</h5>
              <h6>{ item.director }</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item mt-30">
              <h5>Año</h5>
              <h6>{ item.year }</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item mt-30">
              <h5>Categorias</h5>
              <h6>{ item.caegory.join(", ") }</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header