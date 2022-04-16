import React, { useState } from "react";
import styled from "styled-components";

const Cocktails = ({
  name,
  thumbnailImg,
  calories,
  cuisineType,
  id,
  comment,
  setComment,
}) => {
  const [showComment, setShowComment] = useState(false);
  const [stateComment, setStateComment] = useState('')
  return (
    <>
      <StyledCocktailContainer>
        <StyledCocktailRow>
          <img
            src={thumbnailImg}
            alt="thumbnail image recipe"
            style={{
              borderRadius: "50%",
              height: "80px",
              width: "80px",
              marginRight: "10px",
            }}
          />
          <h1>{name}</h1>
        </StyledCocktailRow>
        <StyledCoinData>
          <p>Cal. {calories.toLocaleString()}</p>
          <p>Origin: {cuisineType}</p>
        </StyledCoinData>
        {!comment ? (
          <button
            onClick={() => {
              setShowComment(!showComment);
              if (showComment){
                setComment(stateComment);
              } 
            }}
          >
            {showComment ? "save comment" : "add comment"}
          </button>
        ) : (
          <div>{comment}</div>
        )}
      </StyledCocktailContainer>
      {showComment && (
        <textarea
          value={stateComment}
          onChange={(e) => setStateComment(e.target.value)}
        ></textarea>
      )}
    </>
  );
};

const StyledCocktailContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCocktailRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  border-bottom: 1px solid #2e2e2e;
  width: 500px;
  padding: 0rem 2rem;
  h1 {
    font-size: 16px;
    width: 250px;
  }
  &: hover {
    background-color: #38a5e2;
    color: white;
  }
`;

const StyledCoinData = styled.div`
  display: flex;
  text-align: right;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  p {
    width: 250px;
  }
`;
export default Cocktails;
