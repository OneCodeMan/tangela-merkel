import React, { Component } from 'react';
import strainCategories from '../../helpers/GenerateStrains';
import _ from 'lodash';
import Strain from '../../components/Strain/Strain';
import HorizontalSelector from '../../components/HorizontalSelector/HorizontalSelector';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        margin: '0 auto'
    },

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

    strains: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

const categoryMap = {
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

const categoryKeys = _.keys(categoryMap);
const categoryColours = ['red', 'black', 'blue', 'green', 'orange', 'lightgreen', 'skyblue', 'magenta', 'pink', 'darkblue', 'purple']; // TODO
const typeKeys = ['all', 'indica', 'sativa', 'hybrid'];
const typeColours = ['green', 'darkblue', 'silver', 'darkorange'];

class StrainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        strainsToDisplay: _.orderBy(categoryMap.all, 'rating', 'desc').slice(0, 9),
        items: 9,
        loading: false,
        selectCategoryValue: 'all',
        selectedCategory: [],
        selectTypeValue: 'all',
        selectedType: [],
        query: '',
    }
  }

  handleCategorySelect(category) {
    console.log('category: ', category);
    this.setState({ selectedCategory: [category] });
    this.setState({ selectCategoryValue: category});
  }

 handleTypeSelect(type) {
    console.log('type: ', type);
    this.setState({ selectedType: [type] });
    this.setState({ selectTypeValue: type});
  }  
 
 handleQueryChange(e) {
    this.setState({ query: e.target.value });
  }

  handleReset() {
      this.setState({ strainsToDisplay: _.orderBy(categoryMap.all, 'rating', 'desc') });
      this.setState({ selectCategoryValue: 'all' });
      this.setState({ selectTypeValue: 'all' });
      this.setState({ selectedCategory: [] });
      this.setState({ selectedType: [] });
  }

  handleQuerySearch() {
    let newStrainList = _.orderBy(categoryMap[this.state.selectCategoryValue], 'rating', 'desc')
    newStrainList = this.state.selectTypeValue === 'all' ? 
                    newStrainList :
                    newStrainList.filter(strain => strain.type === this.state.selectTypeValue);
                           
      console.log(newStrainList);
      this.setState({ strainsToDisplay: newStrainList });

    if (this.state.query) {
        let nameResults = newStrainList.filter(strain => strain.name.toLowerCase().includes(this.state.query.toLowerCase()));
        let descriptionResults = newStrainList.filter(strain => strain.description.toLowerCase().includes(this.state.query.toLowerCase()));
        let allResults = nameResults.concat(descriptionResults);
        let finalResults = [... new Set(allResults)];
        this.setState({ strainsToDisplay: finalResults});
        this.setState({ query: '' });
    } else {
          this.setState({ strainsToDisplay: newStrainList });
    }

    }

  render() {
    return(
        <div className={css(styles.container)}>
          <div className={css(styles.categorySelector)}>

            {categoryKeys.map((category, index) => (
              <HorizontalSelector 
                onClick={() => this.handleCategorySelect(category)}
                colour={categoryColours[index]}
                text={category}
                selected={this.state.selectedCategory.includes(category)}
             />
            ))}
          </div>

          <div className={css(styles.categorySelector)}>

            {typeKeys.map((type, index) => (
              <HorizontalSelector 
                onClick={() => this.handleTypeSelect(type)}
                colour={typeColours[index]}
                text={type}
                selected={this.state.selectedType.includes(type)}
             />
            ))}

           </div>

            <input type="text"
               className="search-input"
               placeholder="enter a keyword.."
               value={this.state.query}
               onChange={this.handleQueryChange.bind(this)}
              />
            <button onClick={() => this.handleQuerySearch()}>search</button>
            <br />
            <button onClick={() => this.handleReset()}>reset</button>
            <div className={css(styles.strains)}>
                {this.state.strainsToDisplay.map((strain, index) => (
                    <Strain category={this.state.selectCategoryValue} strain={strain} key={index}/>
                ))}
            </div>
        </div>
    )
  }
}

export default StrainList;
