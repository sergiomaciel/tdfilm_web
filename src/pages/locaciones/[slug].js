/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter, Router  } from "next/router";
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Header/bg-img/index';
import Grid from '../../components/Grid/MasonryLocaciones';
import Footer from "../../components/Footers/MainFooter";

//= Data
import data from '../../data/locaciones.json';

const PortfolioColorfulMasonry = () => {
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

  const router = useRouter();
  const { slug } = router.query;
  const zona = data.zona.find(x => x.name === slug?.toLocaleUpperCase());
  const title = `ZONA ${zona?.name.toLocaleUpperCase() ?? ""}`;

  return (
    <>
      <Head>
      <title>TDFilm - {title} </title>
      </Head>

      <MainLightLayout>
        <StickyBar />
        <Header title={title}  bg={`${router.basePath}/img/header_locaciones.jpg`}/>
        <main className="position-re">
          <Grid zona={zona}/>
          <Footer footerClass="main-footer bg-dark-blue" />
        </main>
      </MainLightLayout>
    </>
  )
}

export default PortfolioColorfulMasonry;