import React from 'react'
import Cocktails from '../Cocktails/Cocktails';

const CocktailList = ({filteredCocktails}) => {
  console.log('hey', filteredCocktails)
  return (
    <div>
      {filteredCocktails.map((cocktail) => {
        console.log(cocktail,'te')
        return (
          <Cocktails
            key={cocktail.recipe.id}
            name={cocktail.recipe.label}
            calories={cocktail.recipe.calories}
            img={cocktail.recipe.image}
            id={cocktail.recipe.id}          
          />
        );
      })}
    </div>
  );  
}

export default CocktailList