import React from 'react';

const Strain = ({strain}) => {

  return (
    <div>
        <h1>{strain.name}</h1>
        <p>{strain.type}</p>
        <p>{strain.rating}</p>
        <p>{strain.description}</p>
        <ul>
            {strain.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
            ))}
        </ul>
        <ul>
            {strain.flavours.map((flavour, index) => (
                <li key={index}>{flavour}</li>
            ))}
        </ul>
    </div>
  );
}

export default Strain;