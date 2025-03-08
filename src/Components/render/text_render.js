'use client';

import AboutMe from '../info-text/about_me';
import MyTecnologics from '../info-text/my_tecnologics';
import MyTools from '../info-text/my_tools';

export default function text_render() {
  return (
    <div className="whapper">
      <AboutMe />
      <div style={{ display: 'flex', width: '100%', gap: '20px' }}>
        <MyTecnologics />
        <MyTools />
      </div>
      
    </div>
  );
}
