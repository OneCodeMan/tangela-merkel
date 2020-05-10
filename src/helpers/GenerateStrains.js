import strainsJSONString from './cannabis.json';

let cannabisJSON = strainsJSONString.filter(strain => !strain.effects.includes('None') && !strain.flavours.includes('None'));

let aphrodisiacStrains = cannabisJSON.filter(strain => strain.effects.includes('Aphrodisiac') 
                                                    || strain.effects.includes('Tingly'));
aphrodisiacStrains = Object.values(aphrodisiacStrains);
                                
let socialStrains = cannabisJSON.filter(strain => strain.effects.includes('Talkative') 
                                              || strain.effects.includes('Giggly'));
socialStrains = Object.values(socialStrains);

let appetiteStrains = cannabisJSON.filter(strain => strain.effects.includes('Hungry'));
appetiteStrains = Object.values(appetiteStrains);

let creativeStrains = cannabisJSON.filter(strain => strain.effects.includes('Creative') 
                                                || strain.effects.includes('Focused')
                                                || strain.effects.includes('Energetic'));
creativeStrains = Object.values(creativeStrains);

let productiveStrains = cannabisJSON.filter(strain => strain.effects.includes('Energetic')
                                                  || strain.effects.includes('Focused'));
productiveStrains = Object.values(productiveStrains);                                        

let sorenessStrains = cannabisJSON.filter(strain => strain.effects.includes('Relaxed'));
sorenessStrains = Object.values(sorenessStrains);

let depressionStrains = cannabisJSON.filter(strain => strain.effects.includes('Happy')
                                                  || strain.effects.includes('Euphoric')
                                                  || strain.effects.includes('Uplifted'));
depressionStrains = Object.values(depressionStrains);

let sleepStrains = cannabisJSON.filter(strain => strain.effects.includes('Sleepy'));
sleepStrains = Object.values(sleepStrains);

let anxietyStrains = cannabisJSON.filter(strain => strain.effects.includes('Relaxed'));
anxietyStrains = Object.values(anxietyStrains);

const strainCategories =  {
  'allStrains': cannabisJSON,
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
