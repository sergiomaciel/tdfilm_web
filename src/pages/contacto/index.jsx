/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import Header from '../../components/Header/bg-img/index';
import Contacto from '../../components/Contacto';
import Footer from '../../components/Footers/MainFooter';

const ContactCreative = () => {
  useEffect(() => {
    const removeClasses = [
      'land-demo2', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'index-bus1',
      'index-main', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title>TDFILM - Contacto</title>
      </Head>

      <MainLightLayout>
        {/* <Header title="Contáctenos" /> */}
        <Header title={"Contáctenos"} bg="img/header_nosotros.jpg" />
        <main className="main-content">
          <Contacto />
          <Footer footerClass="main-footer bg-dark-blue bg-img" business={true} />
        </main>
      </MainLightLayout>
    </>
  )
}

export default ContactCreative;