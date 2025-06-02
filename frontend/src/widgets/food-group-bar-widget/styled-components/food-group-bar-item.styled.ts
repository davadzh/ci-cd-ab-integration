import styled, { css } from "styled-components";

interface FoodGroupBarItemStyledProps {
  _isActive: boolean
}

export const FoodGroupBarItemStyled = styled.div<FoodGroupBarItemStyledProps>`
  ${({_isActive}) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px 12px;
      border: 1px solid #FFFFFF;
      border-radius: 100px;
      font-size: 10px;
      font-weight: 600;
      background: ${_isActive ? "#FFFFFF" : "#141414"};
      color: ${_isActive ? "#141414" : "#FFFFFF"};
      white-space: nowrap;
      width: max-content;
    `
  }}
`;