import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { findByText } from '@testing-library/react';

const styles = StyleSheet.create({
    strain: {
        border: 'solid',
        width: '30%',
        padding: '15px',
        margin: '5px',
        borderRadius: '5px',
        fontFamily: 'Avenir Next',
        borderWidth: '0.5px',
        borderColor: '#2F4858'
    },

    name: {
        color: '#2E6B46',
        fontWeight: 'bold',
    },

    effectsDiv: {

    },

    flavoursDiv: {

    },

    type: {
        
    },

    rating: {

    },

    effects: {
        textAlign: 'left'
    },

    flavours: {
        textAlign: 'left'
    },

    description: {

    }
});

const Strain = ({strain}) => {

  return (
    <div className={css(styles.strain)}>
        <h1 className={css(styles.name)}>{strain.name}</h1>
        <p className={css(styles.type)}>{strain.type} <span className={css(styles.rating)}>{strain.rating}</span></p>
        <p className={css(styles.description)}>{strain.description}</p>
        <div className={css(styles.effectsDiv)}>
            <p className={css(styles.effects)}>
                <strong>Effects:</strong> {strain.effects.join(", ")}
            </p>
            <p className={css(styles.flavours)}>
                <strong>Flavours:</strong> {strain.flavours.join(", ")}
            </p>
        </div>
    </div>
  );
}

export default Strain;