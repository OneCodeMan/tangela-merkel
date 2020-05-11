import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        border: 'solid',
        backgroundColor: 'red',
        height: '300px'
    },
});

function Banner() {

    return (
        <div className={css(styles.container)}>
           
        </div>
      );
}


export default Banner;
