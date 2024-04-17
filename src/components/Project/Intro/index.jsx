import { useRouter } from "next/router";
import Image from 'next/image'
import 'react-slidedown/lib/slidedown.css';

const Detalles = ({ item }) => {
  
  const router = useRouter();
  const portada = `${router.basePath}/${item?.image ?? "img/films/default.jpg"}`

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="item-img">
              <a className="imago wow">
                <Image src={portada} alt="image" width={400} height={600} />
              </a>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-2 col-md-8">
          <h1>{ item?.title }</h1>
          <br />
          { item?.director &&  <h6><b>DIRECTOR:</b> {item?.director}</h6> }
          <br />
          { item?.year &&  <h6><b>AÑO:</b> {item?.director}</h6> }
          <br />
          { item?.year &&  <h6><b>GÉNERO:</b> {item?.caegory.join(", ")}</h6> }
          <br />
          { item?.synopsis && 
            <div>
              <h6><b>SINOPSIS</b></h6>
              <p className="fw-500 fz-18 mb-10 text-dark"> { item?.synopsis } </p>
            </div>
          }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detalles