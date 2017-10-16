import React from 'react';
import { PuppetShow } from './PuppetShow';

export const PuppetShowList = ({ puppetShows }) => {
  console.log('PUPPETSHOWS STATE', puppetShows);
  return (
    <div>De poppenkastlijst, without rows
      {puppetShows.puppetShows.map((show) => (
        <PuppetShow show={show} key={show.id} />
      ))}
    </div>
  );
};

export default PuppetShowList;
