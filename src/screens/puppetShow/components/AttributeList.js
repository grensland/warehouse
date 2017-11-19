import React from 'react';
import * as G from '../../../common/components/StyledComponentsGrensland';

export const AttributeList = ({ attributes }) => {
  console.log('Attribute STATE', attributes);
  return (
    <G.Box>
      <G.BoxTitle>Attributes</G.BoxTitle>
      {attributes
        ? attributes.map((attribute) => (
          <div key={attribute.id}>{attribute.name}</div>))

        : <div>No Attributes</div>
      }
    </G.Box>
  );
};

export default AttributeList;
