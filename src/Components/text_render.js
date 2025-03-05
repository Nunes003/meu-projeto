'use client';

import AboutMe from './info-text/about_me';
import Cards from './info-text/cards';
import MyTecnologics from './info-text/my_tecnologics';
import MyTools from './info-text/my_tools';

export default function text_render() {
  return (
    <div className="whapper">
      <AboutMe />
      <MyTecnologics />
      <MyTools />
      <Cards />
    </div>
  );
}
