import React from 'react';

import Title from '../../components/Title/Title';
import Banner from '../../components/Banner/Banner';
import StrainList from '../../components/StrainList/StrainList';


function Main() {

    return (
        <div className="Main">
            <Title />
            {/* <Banner /> */}
            <StrainList />
        </div>
      );
}


export default Main;
