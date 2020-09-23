import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import StarRatings from 'react-star-ratings';

const styles = StyleSheet.create({
    strain: {
        ':hover': {
            cursor: 'pointer',
            backgroundColor: 'rgb(0, 62, 31, 0.7)',
            color: 'white'
        },
        border: 'solid',
        width: '30%',
        padding: '15px',
        margin: '5px',
        borderRadius: '5px',
        fontFamily: 'Avenir Next',
        borderWidth: '0.5px',
        borderColor: '#2F4858',
        minWidth: '300px'
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
        letterSpacing: '1px',
        textTransform: 'uppercase'
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

const categoryMap = {
    'aphrodisiac': 'aroused',
    'social': 'talkative',
    'appetite': 'hungry',
    'creative': 'creative',
    'productive': 'focused',
    'soreness': 'relaxed',
    'depression': 'happy',
    'sleep': 'sleepy',
    'anxiety': 'relaxed',
}

const flavoursMap = {
    'coffee': '#493B2A',
    'sweet': '#FF66B3',
    'honey': '#DCC48E',
    'strawberry': '#F694C1',
    'blueberry': '#648DE5'
}

// Sample URL: https://www.leafly.com/strains/alaska-thunder-grape
function goToLeaflyURL(strainName) {
    let baseURL = 'https://weedmaps.com/';
    let strainNameLowercasedWithHyphens = strainName.replace(/\s+/g, '-').toLowerCase();
    let completeURL = baseURL + strainNameLowercasedWithHyphens;
    window.open(completeURL, '_blank');
}

const Strain = ({strain, category}) => {

  return (
    <div className={css(styles.strain)} onClick={() => goToLeaflyURL(strain.name)}>
        <h1 className={css(styles.name)}>{strain.name}</h1>
            <StarRatings
            rating={strain.rating}
            starDimension="40px"
            starSpacing="1px"
            starRatedColor="#DAC353"
            />
            <p className={css(styles.type)}>{strain.type}</p>
            <p className={css(styles.description)}>{strain.description}</p>
            <div className={css(styles.effectsDiv)}>
                <p className={css(styles.effects)}>
                    <strong>Effects:</strong> {!strain.effects.includes("nan") ? strain.effects.join(", ") : "N/A"}
                </p>
                <p className={css(styles.flavours)}>
                    <strong>Flavours:</strong> {!strain.flavours.includes("nan") ? strain.flavours.join(", ") : "N/A"}
                </p>
            </div>
    </div>
  );
}

export default Strain;