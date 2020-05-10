import React from 'react';
import strainCategories from '../../helpers/GenerateStrains';
import _ from 'lodash';

const strainMap = {
    'all': strainCategories.allStrains,
    'aphrodisiac': strainCategories.aphrodisiacStrains,
    'social': strainCategories.socialStrains,
    'appetite': strainCategories.appetiteStrains,
    'creative': strainCategories.creativeStrains,
    'productive': strainCategories.productiveStrains,
    'soreness': strainCategories.sorenessStrains,
    'depression': strainCategories.depressionStrains,
    'sleep': strainCategories.sleepStrains,
    'anxiety': strainCategories.anxietyStrains,
  }

function Main() {

    let strainsToDisplay = _.orderBy(strainCategories.productiveStrains, 'rating', 'desc');

    const displayStrains = (type='All') => {
      return strainsToDisplay;
    };


    return (
        <div className="Main">
            {strainsToDisplay.map((strain, index) => (
              <p>{strain.name}, {strain.rating}</p>
            ))}
        </div>
      );
}


export default Main;
