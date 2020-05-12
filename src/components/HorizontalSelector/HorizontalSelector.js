import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    categorySelector: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
  
      categoryOptionWrapper: {
          ':hover': {
            backgroundColor: 'rgb(83, 122, 90, 0.2)'
          },
          margin: '15px',
          padding: '12px',
          cursor: 'pointer',
          fontFamily: "Avenir Next",
      },
  
      categoryOptionBackground: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        margin: '0 auto'
      },

      categoryOptionWrapperSelected: {
        background: 'rgb(83, 122, 90, 0.2)',
        margin: '15px',
        padding: '12px',
        cursor: 'pointer'
      },
});

function generateBackgroundStyle(colour) {
    let desiredBackground = {
        background: colour,
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