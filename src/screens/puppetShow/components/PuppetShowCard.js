import React from 'react';
import { PuppetList } from './PuppetList';
import * as G from '../../../common/components/StyledComponentsGrensland';
import { SceneList } from './SceneList';
import { AttributeList } from './AttributeList';

export const PuppetShowCard = ({ show }) => {
  console.log('PUPPETSHOW STATE', show);
  return (
    <G.Card>
      <G.CardTitle>{show.title}</G.CardTitle>
      <G.Row>
        <PuppetList puppets={show.puppets} />
        <SceneList scenes={show.scenes} />
        <AttributeList scenes={show.attributes} />
      </G.Row>
      <G.PrimaryButton className="Button" onClick={()=>{console.log('Hello')}}>Hello</G.PrimaryButton>
    </G.Card>
  );
};

export default PuppetShowCard;
