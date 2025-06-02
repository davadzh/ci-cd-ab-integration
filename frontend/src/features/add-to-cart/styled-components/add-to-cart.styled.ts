import styled from "styled-components";

export const AddToCartStyled = styled.div`
  height: 22px;
  padding: 0 8px;
  border-radius: 20px;
  background: none;
  border: 1px solid #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  font-size: 18px;
  transition: opacity 0.2s ease;
  opacity: 1;
  flex-direction: row;
  column-gap: 4px;
  
  &:disabled {
    opacity: 0.3;
  }
  
  & > button {
    background: none;
    border: none;
    outline: none;
    color: #69FF66;
    
    &:disabled {
      color: #FFFFFF;
      opacity: 0.5;
    }
  }
  
  & > div {
    font-size: 12px;
    width: 16px;
    text-align: center;
  }
`;