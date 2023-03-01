/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from "next/router";

const Navbar = ({ navbarRef, theme, logoTheme }) => {
  const router = useRouter();

  const dropdownHover = (e) => {
    const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
    const dropdownMenu = dropdownItem.querySelector('.dropdown-menu');
    if (dropdownMenu) dropdownMenu.classList.add('show');
  }

  const dropdownLeave = () => {
    const openedDropdown = document.querySelector('.navbar .dropdown-menu.show');
    if (openedDropdown) openedDropdown.classList.remove('show');
  }

  const sideDropdownHover = (e) => {
    const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
    const dropdownSide = dropdownItem.querySelector('.dropdown-side');
    if (dropdownSide) dropdownSide.classList.add('show');
  }

  const sideDropdownLeave = () => {
    const openedSideDropdown = document.querySelector('.navbar .dropdown-side.show');
    if (openedSideDropdown) openedSideDropdown.classList.remove('show');
  }
  
  return (
    <nav className={`navbar navbar-expand-lg ${theme}`} ref={navbarRef}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <div className="logo">
            { logoTheme === 'dark' && <img src={`${router.basePath}/img/logo-dark.png`} alt="" /> }
            { logoTheme === 'light' && <img src={`${router.basePath}/img/logo-light.png`} alt="" /> }
            { !logoTheme && <img src={`${router.basePath}/img/logo-dark.png`} alt="" /> }
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/"><a className="nav-link">HOME</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/nosotros"><a className="nav-link">NOSOTROS</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/cine"><a className="nav-link"><b>CINE</b></a></Link>
            </li>
            <li className="nav-item">
              <Link href="/hecho-en-tdf"><a className="nav-link">HECHO EN TDF</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/locaciones"><a className="nav-link">LOCACIONES</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/contacto"><a className="nav-link">CONTACTO</a></Link>
            </li>
          </ul>
          <div className="social">
            <ul className="rest">
              <li>
                <a target="_blank" href="https://www.facebook.com/Sec.CulturaTDF" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a target="_blank" href="https://www.instagram.com/culturatdf" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;