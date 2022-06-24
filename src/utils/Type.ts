export const classByType = (type:string):string => {
  const classByType:any = {
    'fire': () => 'pokemon-color--fire',
    'water': () => 'pokemon-color--water',
    'grass': () => 'pokemon-color--grass',
    'bug': () => 'pokemon-color--bug',
    'ground': () => 'pokemon-color--ground',
    'normal': () => 'pokemon-color--normal',
  }

  return classByType[type]? classByType[type]() : ''
}

export const lightClassByType = (type:string):string => {
  const classByType:any = {
    'fire': () => 'pokemon-color__light--fire',
    'water': () => 'pokemon-color__light--water',
    'grass': () => 'pokemon-color__light--grass',
    'bug': () => 'pokemon-color__light--bug',
    'ground': () => 'pokemon-color__light--ground',
    'normal': () => 'pokemon-color__light--normal',
  }

  return classByType[type]? classByType[type]() : ''
}