import React from 'react';
import * as G from '../../../common/components/StyledComponentsGrensland';

export const SceneList = ({ scenes }) => {
  console.log('SCENES STATE', scenes);
  return (
    <G.Box>
      <G.BoxTitle>Decors</G.BoxTitle>
      {scenes.map((scene) => (
        <div key={scene.id}>{scene.name}</div>
      ))}
    </G.Box>
  );
};

export default SceneList;
