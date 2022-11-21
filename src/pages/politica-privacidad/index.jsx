/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import Header from '../../components/Header/bg-img/index';
import PoliticaPrivacidad from '../../components/Detalles/PoliticaPrivacidad';
import Footer from "../../components/Footers/MainFooter";

const AboutBusiness = () => {
  useEffect(() => {
    document.body.classList.add('index-bus1');

    const removeClasses = [
      'land-demo2', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'index-main', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title>TDFILM - Política de privacidad</title>
      </Head>

      <MainLightLayout>
        <StickyBar />
        <Header title={"Política de privacidad"} bg="img/header_nosotros.jpg" />
        <main className="position-re">
          <PoliticaPrivacidad />
          <Footer footerClass="main-footer bg-dark-blue bg-img" business={true} />
        </main>
      </MainLightLayout>
    </>
  )
}

export default AboutBusiness;