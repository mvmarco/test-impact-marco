import { React, useState, useEffect } from "react";
import CocktailList from "../components/CocktailList/CocktailList";
import Layout from "../components/Layout/Layout";
import SearchBar from "../components/SearchBar/SearchBar";
import styled from "styled-components";

export default function Home({ filteredCocktails }) {
  const [lsitOfDrinks, setListOfDrinks] = useState(filteredCocktails.hits);
  const [filterName, setFilterName] = useState(null);
  const [sortCalories, setSortCalories] = useState(null);
  const [sortNames, setSortNames] = useState(null);

  const cuisineTypeArr = filteredCocktails.hits.map(
    (cocktail) => cocktail.recipe.cuisineType[0]
  );
  const cuisineTypeArrFiltered = [...new Set(cuisineTypeArr)];

  const sortCaloriesHandle = () => {
    console.log(lsitOfDrinks);
    if (!sortCalories) {
      setSortCalories("ASC");
      setListOfDrinks(
        [...lsitOfDrinks].sort((a, b) => a.recipe.calories - b.recipe.calories)
      );
    } else if (sortCalories === "ASC") {
      setSortCalories("DESC");
      setListOfDrinks(
        [...lsitOfDrinks].sort((a, b) => b.recipe.calories - a.recipe.calories)
      );
    } else {
      setSortCalories(null);
      setListOfDrinks([...filteredCocktails.hits]);
    }
  };
  

  const sortNamesHandle = () => {
    function compareASC(a, b) {
      if (a.recipe.label < b.recipe.label) {
        return -1;
      }
      if (a.recipe.label > b.recipe.label) {
        return 1;
      }
      return 0;
    }
    function compareDESC(a, b) {
      if (a.recipe.label > b.recipe.label) {
        return -1;
      }
      if (a.recipe.label < b.recipe.label) {
        return 1;
      }
      return 0;
    }
    if (!sortNames) {
      setSortNames("ASC");
      setListOfDrinks([...lsitOfDrinks].sort(compareASC));
    } else if (sortNames === "ASC") {
      setSortNames("DESC");
      setListOfDrinks(
        [...lsitOfDrinks].sort(compareDESC));
    } else {
      setSortNames(null);
      setListOfDrinks([...filteredCocktails.hits]);
    }
  };

  const handleClick = (name) => {
    if (filterName) {
      setFilterName(null);
    } else {
      setFilterName(name);
    }
  };

  useEffect(() => {
    if (filterName) {
      const filteredBySearch = filteredCocktails.hits.filter((cocktail) =>
        cocktail.recipe.cuisineType.includes(filterName.toLowerCase())
      );
      setListOfDrinks(filteredBySearch);
    } else {
      setListOfDrinks(filteredCocktails.hits);
    }
  }, [filterName]);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.value;
    const filteredBySearch = filteredCocktails.hits.filter((cocktail) =>
      // making sure no matter which way you type the result shows up
      cocktail.recipe.label.toLowerCase().includes(name.toLowerCase())
    );
    setListOfDrinks(filteredBySearch);
  };
  return (
    <Layout>
      <StyledRecipeApp>
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        <StyledButtonContainer>
          {cuisineTypeArrFiltered.map((cuisine, key) => (
            <StyledButton
              key={key}
              onClick={() => {
                handleClick(cuisine);
              }}
              style={{ backgroundColor: cuisine === filterName ? "red" : "" }}
            >
              {cuisine}
            </StyledButton>
          ))}
          <StyledButton onClick={sortCaloriesHandle}>
            Sort by Calories<div>{sortCalories}</div>
          </StyledButton>
          <StyledButton onClick={sortNamesHandle}>
            Sort by Name <div>{sortNames}</div>
          </StyledButton>
        </StyledButtonContainer>
        <CocktailList
          filteredCocktails={lsitOfDrinks}
          setListOfDrinks={setListOfDrinks}
        />
      </StyledRecipeApp>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=beer&app_id=fa16bc02&app_key=0eaeefd532a20f963fd0850b5f4a7df6&dishType=Drinks`
  );

  const filteredCocktails = await res.json();
  return {
    props: {
      filteredCocktails,
    },
  };
};

const StyledRecipeApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 80px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;
const StyledButton = styled.button`
  box-sizing: border-box;
  height: 62px;
  width: 115px;
  border: 2px solid #212222;
  outline: none;
  background-color: #ffffff;
  margin: 1rem;
  font-size: 16px;
  cursor: pointer;
  &: hover {
    background-color: #38a5e2;
    color: white;
  }
`;
