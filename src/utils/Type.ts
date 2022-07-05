export const classByType = (type:string):string => {
  const classByType:any = {
    'fire': () => 'pokemon-color--fire',
    'water': () => 'pokemon-color--water',
    'grass': () => 'pokemon-color--grass',
    'electric': () => 'pokemon-color--electric',
    'bug': () => 'pokemon-color--bug',
    'poison': () => 'pokemon-color--poison',
    'ground': () => 'pokemon-color--ground',
    'flying': () => 'pokemon-color--flying',
    'fairy': () => 'pokemon-color--fairy',
    'normal': () => 'pokemon-color--normal',
  }

  return classByType[type]? classByType[type]() : ''
}

export const lightClassByType = (type:string):string => {
  const classByType:any = {
    'fire': () => 'pokemon-color__light--fire',
    'water': () => 'pokemon-color__light--water',
    'grass': () => 'pokemon-color__light--grass',
    'electric': () => 'pokemon-color__light--electric',
    'bug': () => 'pokemon-color__light--bug',
    'poison': () => 'pokemon-color__light--poison',
    'ground': () => 'pokemon-color__light--ground',
    'flying': () => 'pokemon-color__light--flying',
    'fairy': () => 'pokemon-color__light--fairy',
    'normal': () => 'pokemon-color__light--normal',
  }

  return classByType[type]? classByType[type]() : ''
}