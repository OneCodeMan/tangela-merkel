import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    strain: {
        border: 'solid',
        width: '30%',
        padding: '15px',
        margin: '5px'
    },

    name: {
       
    },

    type: {
        
    },

    rating: {

    },

    effects: {

    },

    effect: {

    },

    flavours: {

    },

    flavour: {

    },

    description: {

    }
});

const Strain = ({strain}) => {

  return (
    <div className={css(styles.strain)}>
        <h1 className={css(styles.name)}>{strain.name}</h1>
        <p className={css(styles.type)}>{strain.type}</p>
        <p className={css(styles.rating)}>{strain.rating}</p>
        <ul className={css(styles.effects)}>
            {strain.effects.map((effect, index) => (
                <li className={css(styles.effect)} key={index}>{effect}</li>
            ))}
        </ul>
        <ul className={css(styles.flavours)}>
            {strain.flavours.map((flavour, index) => (
                <li className={css(styles.flavour)} key={index}>{flavour}</li>
            ))}
        </ul>
        <p className={css(styles.description)}>{strain.description}</p>
    </div>
  );
}

export default Strain;