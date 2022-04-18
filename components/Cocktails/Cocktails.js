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
  const [stateComment, setStateComment] = useState("");
  return (
    <>
      <StyledCocktailContainer>
        <StyledCocktailRow>
          <StyledCocktailImg src={thumbnailImg} alt="thumbnail image recipe" />
          <StyledCocktailMainInfo>
            <h1>{name}</h1>
            <div>
              {showComment && (
                <StyledTextArea
                  value={stateComment}
                  onChange={(e) => setStateComment(e.target.value)}
                ></StyledTextArea>
              )}
              {!comment ? (
                <StyledButton
                  onClick={() => {
                    setShowComment(!showComment);
                    if (showComment) {
                      setComment(stateComment);
                    }
                  }}
                >
                  {showComment ? "save comment" : "add comment"}
                </StyledButton>
              ) : (
                <div style={{ color: "grey", fontStyle: "italic" }}>
                  Comment:
                  <br />
                  {comment}
                </div>
              )}
            </div>
          </StyledCocktailMainInfo>
        </StyledCocktailRow>
        <StyledCocktailData>
          <p>Cal. {calories.toLocaleString()}</p>
          <p>Origin: {cuisineType}</p>
        </StyledCocktailData>
      </StyledCocktailContainer>
    </>
  );
};

const StyledCocktailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const StyledCocktailImg = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  margin-right: 10px;
`;

const StyledCocktailMainInfo = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StyledTextArea = styled.textarea`
  width: 112px;
  box-sizing: border-box;
  height: 32px;
  width: 112px;
  border: 2px solid #212222;
  outline: none;
  background-color: #ffffff;
  margin: 1rem 0;
  font-size: 16px;
  overflow: auto;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
`;

const StyledCocktailData = styled.div`
  display: flex;
  text-align: right;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  p {
    width: 250px;
  }
`;

const StyledButton = styled.button`
  box-sizing: border-box;
  height: 32px;
  width: 112px;
  border: 2px solid #212222;
  outline: none;
  background-color: #ffffff;
  margin: 1rem 0;
  font-size: 16px;
  cursor: pointer;
`;
export default Cocktails;
