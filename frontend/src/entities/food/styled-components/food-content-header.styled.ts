import styled from "styled-components";

export const FoodContentHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  
  & > div {
    &:nth-child(1) {
      color: #FFFFFF;
      font-size: 12px;
      line-height: 14px;
    }
    
    &:nth-child(2) {
      color: #868686;
      font-size: 8px;
      line-height: 9px;
    }
  }
`;