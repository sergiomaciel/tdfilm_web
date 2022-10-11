/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Portfolio/Header';
import Portfolio from '../../components/Portfolio/Classic/TwoColumns';
import Footer from "../../components/Footers/MainFooter";

const PortfolioClassicTwoCols = () => {
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

  return (
    <>
      <Head>
        <title>Ravo - Portfolio Classic | Two column</title>
      </Head>

      <MainLightLayout defaultTheme="dark" defaultLogoTheme="dark">
        <StickyBar />
        <FixedSearch />
        <Header title="Portfolio classic." subTitle="Portfolio classic Two column" />
        <main className="position-re">
          <Portfolio />
          <Footer footerClass="main-footer bg-dark-blue" />
        </main>
      </MainLightLayout>
    </>
  )
}

export default PortfolioClassicTwoCols;