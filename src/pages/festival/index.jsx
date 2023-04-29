/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import Header from '../../components/Header/bg-img/index';
import CineenGrande from '../../components/Detalles/CineenGrande';
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
        <title>TDFILM - Festival</title>
      </Head>

      <MainLightLayout>
        <Header 
          title={"Cine en Grande"}
          bg="img/header_cineengrande.jpg"
          subTitle={"Rio Grande | Del 3 al 7 de Mayo"}
        />
        <main className="position-re">
          <CineenGrande />
          <Footer footerClass="main-footer bg-dark-blue bg-img" business={true} />
        </main>
      </MainLightLayout>
    </>
  )
}

export default AboutBusiness;