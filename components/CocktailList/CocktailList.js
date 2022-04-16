import React from 'react'
import Cocktails from '../Cocktails/Cocktails';


const CocktailList = ({ filteredCocktails, setListOfDrinks }) => {
  console.log("filtered cocktails", filteredCocktails);
  return (
    <div>
      {filteredCocktails.map((cocktail,index) => {
        console.log(cocktail, "cocktail");
        return (
          <Cocktails
            key={cocktail.recipe.id}
            name={cocktail.recipe.label}
            calories={cocktail.recipe.calories}
            cuisineType={cocktail.recipe.cuisineType}
            thumbnailImg={cocktail.recipe.images.THUMBNAIL.url}
            id={cocktail.recipe.id}
            comment={cocktail.recipe.comment}
            setComment={(comment)=>{
              filteredCocktails[index].recipe.comment = comment;
              setListOfDrinks([...filteredCocktails]);
            }}
          />
        );
      })}
    </div>
  );
};


export default CocktailList