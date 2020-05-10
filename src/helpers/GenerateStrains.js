import strainsJSONString from './cannabis.json';

let cannabisJSON = strainsJSONString.map(strain => JSON.parse(strain));
cannabisJSON = strainsJSONString.filter(strain => strain.effects.includes('None') && strain.flavours.includes('None'));
const aphrodisiacStrains = cannabisJSON.filter(strain => strain.effects.includes('Aphrodisiac') 
                                                    || strain.effects.includes('Tingly'));
const socialStrains = cannabisJSON.filter(strain => strain.effects.includes('Talkative') 
                                              || strain.effects.includes('Giggly'));
const appetiteStrains = cannabisJSON.filter(strain => strain.effects.includes('Hungry'));
const creativeStrains = cannabisJSON.filter(strain => strain.effects.includes('Creative') 
                                                || strain.effects.includes('Focused')
                                                || strain.effects.includes('Energetic'));
const productiveStrains = cannabisJSON.filter(strain => strain.effects.includes('Energetic')
                                                  || strain.effects.includes('Focused'));
const sorenessStrains = cannabisJSON.filter(strain => strain.effects.includes('Relaxed'));
const depressionStrains = cannabisJSON.filter(strain => strain.effects.includes('Happy')
                                                  || strain.effects.includes('Euphoric')
                                                  || strain.effects.includes('Uplifted'));
const sleepStrains = cannabisJSON.filter(strain => strain.effects.includes('Sleepy'));
const anxietyStrains = cannabisJSON.filter(strain => strain.effects.includes('Relaxed'));

const strainCategories =  {
  'aphrodisiacStrains': aphrodisiacStrains,
  'socialStrains': socialStrains,
  'appetiteStrains': appetiteStrains,
  'creativeStrains': creativeStrains,
  'productiveStrains': productiveStrains,
  'sorenessStrains': sorenessStrains,
  'depressionStrains': depressionStrains,
  'sleepStrains': sleepStrains,
  'anxietyStrains': anxietyStrains,
};

export default strainCategories;
