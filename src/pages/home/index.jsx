/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import Header from '../../components/Corporate/Header';
import Testimonials from '../../components/Corporate/Testimonials';
import Footer from "../../components/Footers/MainFooter";

const HomeCorporate = () => {
  useEffect(() => {
    document.body.classList.add('index-corporate');

    const removeClasses = [
      'land-demo2', 'index-bus1',
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
        <title>TDFILM - Tierra Del Fuego</title>
      </Head>

      <MainLightLayout>
        <StickyBar />
        <Header />
        {/* <Testimonials /> */}
        <Footer footerClass="main-footer bg-dark-blue bg-img" business={true} />
      </MainLightLayout>
    </>
  )
}

export default HomeCorporate;