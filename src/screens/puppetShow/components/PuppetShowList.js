import React from 'react';

export const PuppetShowList = ({ puppetShows }) => {
  console.log('PUPPETSHOWS STATE', puppetShows);
  return (
    <div>De poppenkastlijst, without rows
      <ul>
        {puppetShows.puppetShows.map((show) => (
          <li key={show.id}>{show.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PuppetShowList;
