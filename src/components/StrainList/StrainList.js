import React, { Component } from 'react';
import strainCategories from '../../helpers/GenerateStrains';
import _ from 'lodash';
import Strain from '../../components/Strain/Strain';

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

class StrainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        strainsToDisplay: _.orderBy(categoryMap.all, 'rating', 'desc'),
        selectCategoryValue: 'all',
        selectTypeValue: 'all',
    }
    this.handleCategorySelectValue = this.handleCategorySelectValue.bind(this);
    this.handleTypeSelectValue = this.handleTypeSelectValue.bind(this);
  }

  handleCategorySelectValue(event) {
      console.log('category: ', event.target.value);
      this.setState({ selectCategoryValue: event.target.value});
  }

 handleTypeSelectValue(event) {
    console.log('type: ', event.target.value);
    this.setState({ selectTypeValue: event.target.value});
 }

  handleClick() {
      let newStrainList = _.orderBy(categoryMap[this.state.selectCategoryValue], 'rating', 'desc')
                           .filter(strain => strain.type === this.state.selectTypeValue);
      console.log(newStrainList);
      this.setState({ strainsToDisplay: newStrainList });
  }

  render() {
    return(
        <div>
            <select value={this.state.selectCategoryValue} onChange={this.handleCategorySelectValue}>
                <option value="all">All</option>
                <option value="aphrodisiac">Aphrodisiac</option>
                <option value="social">Social</option>
                <option value="appetite">Appetite</option>
                <option value="creative">Creative</option>
                <option value="productive">Productive</option>
                <option value="soreness">Soreness</option>
                <option value="depression">Depression</option>
                <option value="sleep">Sleep</option>
                <option value="anxiety">Anxiety</option>
            </select>
            <select value={this.state.selectTypeValue} onChange={this.handleTypeSelectValue}>
                <option value="all">All</option>
                <option value="hybrid">Hybrid</option>
                <option value="indica">Indica</option>
                <option value="sativa">Sativa</option>
            </select>
            <button onClick={() => this.handleClick()}>select</button>
            {this.state.strainsToDisplay.map((strain, index) => (
                <Strain strain={strain} key={index}/>
            ))}
        </div>
    )
  }
}

export default StrainList;
