import React from 'react';
import * as G from '../../../common/components/StyledComponentsGrensland';

export const PuppetList = ({ puppets }) => {
  console.log('PUPPETS STATE', puppets);
  return (
    <G.Box>
      <G.BoxTitle>Poppen</G.BoxTitle>
      {puppets.map((puppet) => (
        <div key={puppet.id}>{puppet.name}</div>
      ))}
    </G.Box>
  );
};

export default PuppetList;
