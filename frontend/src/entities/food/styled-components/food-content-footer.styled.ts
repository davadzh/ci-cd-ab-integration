import styled from "styled-components";

export const FoodContentFooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  & > div {
    &:nth-child(1) {
      font-size: 14px;
      line-height: 21px;
      color: #FFFFFF;
      
      & > span {
        font-size: 10px;
      }
    }
  }
`;