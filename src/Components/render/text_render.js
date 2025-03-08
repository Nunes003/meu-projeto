'use client';

import AboutMe from '../info-text/about_me';
import MyTecnologics from '../info-text/my_tecnologics';
import MyTools from '../info-text/my_tools';
import Skills from '../info-text/Skills';
import '../styles/info-text/info_text.css';

export default function text_render() {
  return (
    <div className="whapper">
      <AboutMe />
      <div className='box'>
        <MyTecnologics />
        <MyTools />
      </div>
      <Skills />
    </div>
  );
}
