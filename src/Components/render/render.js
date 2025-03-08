'use client';
import Banner from '../common/banner';
import Footer from '../common/footer';
import Text_render from './text_render';
import Header from '../common/header';
import '../styles/info-text/info_text.css';
import '../styles/info-text/skills.css';
import '../styles/header.css';
import '../styles/banner.css';
import '../styles/footer.css';
import '../styles/text_render.css';

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
