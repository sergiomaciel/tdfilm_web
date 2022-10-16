/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";
import Link from 'next/link';
import slugify from "slugify";
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Project/Header';
import Detalles from '../../components/Project/Intro';
import Video from '../../components/Project/Video';
import Details from '../../components/Project/Details';
import Description from '../../components/Project/Description';
import NextPrev from '../../components/Project/NextPrev';
import Footer from "../../components/Footers/MainFooter";
//= Data
import data from '../../data/produciones.json';

const ProduccionDetalles = () => {
  useEffect(() => {
    const removeClasses = [
      'index-bus1', 'index-main', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'land-demo2', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const item = data.films.find(x => slugify(x.title).toLowerCase()  === slug );
  
  return (
    <>
      <Head>
        <title>TDFilm - {item?.title}</title>
      </Head>

      <MainLightLayout MainLightLayout defaultTheme="dark" defaultLogoTheme="dark">
        <StickyBar />
        <div className="wrapper">
          <Detalles item={ item } />
          <Video />
          <Footer footerClass="main-footer bg-dark-blue" />
        </div>
      </MainLightLayout>
    </>
  )
}

export default ProduccionDetalles;