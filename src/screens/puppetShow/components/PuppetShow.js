import React from 'react';
import { PuppetList } from './PuppetList';

export const PuppetShow = ({ show }) => {
  console.log('PUPPETSHOW STATE', show);
  return (
    <div>
      <h5>Poppenkast stuk: {show.title}</h5>
      <PuppetList puppets={show.puppets} />
    </div>
  );
};

export default PuppetShow;
