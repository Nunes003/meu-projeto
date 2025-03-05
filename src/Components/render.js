'use client';
import Banner from './banner';
import Footer from './footer';
import Text_render from './text_render';
import Header from './header';

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
