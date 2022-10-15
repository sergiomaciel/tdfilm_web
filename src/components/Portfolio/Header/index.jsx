
const Header = ({ title, subTitle }) => {
  return (
    <header className="pg-header-sipm pg-work gr-purple-light-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-10">
            <div className="caption text-center">
              <h1 className="fz-60">{ title }</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 offset-lg-1 valign">
            <div className="hero-cont">
              <p className="fw-500 fz-18 mb-10 text-dark"> {subTitle} </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header