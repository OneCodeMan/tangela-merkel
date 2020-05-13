import React, { Component } from 'react';
import strainCategories from '../../helpers/GenerateStrains';
import _ from 'lodash';
import HorizontalSelector from '../../components/HorizontalSelector/HorizontalSelector';
import Strain from '../../components/Strain/Strain';
import { StyleSheet, css } from 'aphrodite';
import { Button, TextField } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';

const ellipsisAnim = {
  'to': {
    width: '1.25em'
  }
}

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

    animationWrapper: {
      padding: '10px'
    },

    searchContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'space-between',
      width: '200px',
      margin: '0 auto'
      
    },

    searchButton: {
      height: '40px',
      margin: '12px',
      backgroundColor: '#4A6C6F',
      fontFamily: 'Avenir Next'
    },

    resetButton: {
      fontFamily: 'Avenir Next',
      backgroundColor: '#393D3F',
    },

    strains: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '20px'
    },

    loadingEllipsis: {
      ':after': {
        overflow: 'hidden',
        display: 'inline-block',
        verticalAlign: 'bottom',
        animationName: [ellipsisAnim],
        animationTimingFunction: 'steps(4, end)',
        animationDuration: '900ms',
        animationIterationCount: 'infinite',
        content: '...',
        width: '0px'
      },
    }
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
const categoryColours = ['linear-gradient(to top left, #CA876B, #972C01)', 
                        'linear-gradient(to left, #dd5e89, #f7bb97)', 
                        'linear-gradient(to bottom right, #808AF4, #5D50DD)', 
                        'linear-gradient(to top left, #1B16F0, #1EF152)', 
                        'linear-gradient(to top left, #19598F, #24B7C0)', 
                        'linear-gradient(to top left, #1E5483, #BB2175)', 
                        'linear-gradient(to top left, #923B03, #FC9E6E)', 
                        'linear-gradient(to bottom, #1E2689, #000000)', 
                        'linear-gradient(to bottom right, #4D5EAD, #318FCA)', 
                        'linear-gradient(to right, #E728FC, #46E9D7)', 
                        'linear-gradient(to right, #E728FC, #46E9D7)']; 

const typeKeys = ['all', 'indica', 'sativa', 'hybrid'];
const typeColours = ['#00DB8B', 
                    '#01FF5E', 
                    '#219467', 
                    'linear-gradient(to left, #01FF5E, #219467)'];

const JointLoadingAnimation = () => {
  return (
    <div className={css(styles.animationWrapper)}>
      <img src="https://i.gifer.com/4s2S.gif" alt="Spliff"></img>
      <div className={css(styles.loadingEllipsis)}>Loading...</div>
    </div>
  )
};

class StrainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        strainsToDisplay: _.orderBy(categoryMap.all, 'rating', 'desc').slice(0, 9),
        items: 9,
        loading: false,
        selectCategoryValue: 'all',
        selectedCategory: ['all'],
        selectTypeValue: 'all',
        selectedType: ['all'],
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
      this.setState({ selectedCategory: ['all'] });
      this.setState({ selectedType: ['all'] });
  }

  handleQuerySearch() {
    this.setState({ loading: true });
    setTimeout(
      function() {
          this.setState({ loading: false });
      }
      .bind(this),
      1800);
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

            <div className={css(styles.searchContainer)}>
              <TextField 
                id="outlined-basic" 
                label="Search (optional)" 
                variant="outlined" 
                className={css(styles.searchInput)}
                value={this.state.query}
                onChange={this.handleQueryChange.bind(this)}
              />
              <Button variant="contained" color="primary" className={css(styles.searchButton)} onClick={() => this.handleQuerySearch()}>
                search
              </Button>
              <Button variant="contained" color="primary" className={css(styles.resetButton)} onClick={() => this.handleReset()}>
                reset
              </Button>
            </div>

            <div className={css(styles.strains)}>
              {this.state.loading 
              ? <JointLoadingAnimation />
              : this.state.strainsToDisplay.map((strain, index) => (
                <Strain category={this.state.selectCategoryValue} strain={strain} key={index}/>
              ))}           
            </div>
        </div>
    )
  }
}

export default StrainList;
