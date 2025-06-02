import styled from "styled-components";

export const FoodStyled = styled.div`
  height: auto;
  border-radius: 20px;
  overflow: hidden;
  background: #060606;
  display: flex;
  flex-direction: column;
  
  & > img {
    width: auto;
    object-fit: cover;
    border-radius: 10px;
  }
`;