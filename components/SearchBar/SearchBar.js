import React from 'react'
import styled from "styled-components";

const SearchBar = (props) => {
  return (
    <StyledCocktailSearch>
      <StyledCocktailInput {...props} />
    </StyledCocktailSearch>
  );
}


const StyledCocktailSearch = styled.div`
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  width: 300px;
`;

const StyledCocktailInput = styled.input`
  border: none;
  padding: 16px;
  border-radius: 4px;
  outline: none;
  height: 100%;
  width: 100%;
  z-index: 100;
  border: 1px solid #9c9c9c ;
`;


export default SearchBar