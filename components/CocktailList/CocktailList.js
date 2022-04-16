import React from 'react'
import Cocktails from '../Cocktails/Cocktails';

const CocktailList = ({filteredCocktails}) => {
  console.log('hey')
  return (
    <div>
      {filteredCocktails.map((cocktail) => {
        return (
          <Cocktails
            key={cocktail.id}
            name={cocktail.label}
            id={cocktail.id}          
          />
        );
      })}
    </div>
  );  
}

export default CocktailList