import styled from "styled-components";

export const RestaurantsPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  min-height: 100vh;
  
  & > div {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    
    & > div {
      font-size: 32px;
      color: #FFFFFF;
      font-weight: 600;
      margin-bottom: 16px;
    }

    & > button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #FFFFFF;
      border-radius: 20px;
      padding: 16px;
      color: #FFFFFF;
      font-size: 16px;
      background: none;
      outline: none;
    }
  }
`;