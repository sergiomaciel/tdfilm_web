/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Header/bg-img/index';
import Grid from '../../components/Grid/FourColumnsCategoriaLocaciones/index';
import Footer from "../../components/Footers/MainFooter";

const PortfolioClassicFourCols = () => {
  useEffect(() => {
    const removeClasses = [
      'index-main', 'index-bus1', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'land-demo2', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  const title = "LOCACIONES"

  return (
    <>
      <Head>
        <title>TDFilm | { title }</title>
      </Head>

      <MainLightLayout>
        <StickyBar />
        <Header title={title}  bg={"img/header_locaciones.jpg"}
        />
        <main className="position-re">
          <Grid />
          {/* <Footer footerClass="main-footer bg-dark-blue" /> */}
        </main>
      </MainLightLayout>
    </>
  )
}

export default PortfolioClassicFourCols;