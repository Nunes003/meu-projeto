'use client';
import Banner from '../common/banner';
import Footer from '../common/footer';
import Text_render from './text_render';
import Header from '../common/header';

export default function Render() {
  return (
    <>
      <Header />
      <Banner />
      <Text_render />
      <Footer />
    </>
  );
}
