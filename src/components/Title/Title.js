import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        border: 'solid #048A81',
        backgroundColor: '#048A81'
    },
    title: {
        color: 'white',
        fontSize: '45px',
        cursor: 'pointer'
    }
});

function Title() {

    return (
        <div className={css(styles.container)}>
           <h1 className={css(styles.title)}>CannaRecs</h1>
        </div>
      );
}


export default Title;
