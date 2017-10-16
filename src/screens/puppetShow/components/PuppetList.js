import React from 'react';

export const PuppetList = ({ puppets }) => {
  console.log('PUPPETS STATE', puppets);
  return (
    <div>Poppen:
      {puppets.map((puppet) => (
        <div key={puppet.id}>{puppet.name}</div>
      ))}
    </div>
  );
};

export default PuppetList;
