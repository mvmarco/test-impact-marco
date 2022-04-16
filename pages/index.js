import {React, useState} from 'react'
import CocktailList from '../components/CocktailList/CocktailList';
import Layout from "../components/Layout/Layout";
import SearchBar from "../components/SearchBar/SearchBar";
import styled from "styled-components"


export default function Home({filteredCocktails}) {
  const [search, setSearch] = useState("");
  const allCocktails = filteredCocktails.hits.filter((cocktail) =>
    // making sure no matter which way you type the result shows up
    cocktail.recipe.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <Layout>
      <StyledRecipeApp>
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        <CocktailList filteredCocktails={allCocktails} />
      </StyledRecipeApp>
    </Layout>
  );
}


export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.edamam.com/api/recipes/v2?type=public&q=vodka&app_id=fa16bc02&app_key=0eaeefd532a20f963fd0850b5f4a7df6&dishType=Drinks"
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
