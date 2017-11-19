import React from 'react';
import { PuppetShowCard } from './PuppetShowCard';
import * as G from '../../../common/components/StyledComponentsGrensland';

export const PuppetShowList = ({ puppetShows }) => {
  console.log('PUPPETSHOWS STATE', puppetShows);
  return (
    <div>
      <G.PageTitle>Lijst van de poppenkast stukken</G.PageTitle>
      <div>
        {puppetShows.puppetShows.map((show) => (
          <PuppetShowCard show={show} key={show.id} />
        ))}
      </div>
    </div>
  );
};

export default PuppetShowList;
