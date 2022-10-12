/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import Header from '../../components/Business/Header2';
import NosotrosDetalles from '../../components/Nosotros/Detalles';
import Services from '../../components/Business/Services2';
import About from '../../components/Business/About';
import Testimonials from '../../components/Business/Testimonials';
import Clients from '../../components/Business/Clients';
import Team from '../../components/Business/Team';
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
        <title>TDFILM - Nosotros</title>
      </Head>

      <MainLightLayout>
        <StickyBar />
        <Header bg="img/tdfilm_nosotros.jpg" />
        <main className="position-re">
          <NosotrosDetalles />
          <Team />
          <Footer footerClass="main-footer bg-dark-blue bg-img" business={true} />
        </main>
      </MainLightLayout>
    </>
  )
}

export default AboutBusiness;