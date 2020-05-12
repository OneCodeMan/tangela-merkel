import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import StarRatings from 'react-star-ratings';

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

      categoryOptionWrapperSelected: {
        background: 'lightgray',
        margin: '15px',
        padding: '12px',
        cursor: 'pointer'
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

const Option = ({colour}) => {
  return (
    <div 
      className={css(styles.categoryOptionBackground)} 
      style={generateBackgroundStyle(colour)}>
    </div>
  );
}

const HorizontalSelector = ({onClick, colour, text, selected}) => {

  return (
    <div className={selected ? css(styles.categoryOptionWrapperSelected)
                             : css(styles.categoryOptionWrapper)} 
          onClick={() => onClick(text)}
    >
        <Option 
        colour={colour}/>
        <div className={css(styles.categoryOptionTextDiv)}>
            <p className={css(styles.categoryOptionParagraph)}>{text}</p>
        </div>
    </div>
  );
}

export default HorizontalSelector;