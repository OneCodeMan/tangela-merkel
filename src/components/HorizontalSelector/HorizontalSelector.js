import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

const styles = StyleSheet.create({
    categorySelector: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      },
  
      categoryOptionWrapper: {
          ':hover': {
            backgroundColor: 'lightgray'
          },
          margin: '15px',
          padding: '12px',
          cursor: 'pointer'
      },
  
      categoryOptionBackground: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        margin: '0 auto'
      },
});

function generateBackgroundStyle(colour) {
    let desiredBackground = {
        backgroundColor: colour,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        margin: '0 auto'
    }
    return desiredBackground;
}

const HorizontalSelector = ({onClick, colour, text}) => {

  return (
    <div className={css(styles.categoryOptionWrapper)} onClick={() => onClick(text)}>
        <div className={css(styles.categoryOptionBackground)} style={generateBackgroundStyle(colour)}>
        </div>
        <div className={css(styles.categoryOptionTextDiv)}>
            <p className={css(styles.categoryOptionParagraph)}>{text}</p>
        </div>
    </div>
  );
}

export default HorizontalSelector;