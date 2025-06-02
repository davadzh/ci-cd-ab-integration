import { BackButtonStyled } from "@widgets/back-button-widget/styled-components/back-button.styled.ts";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  path: string
}

export const BackButton = (props: BackButtonProps) => {
  const { path } = props

  const navigate = useNavigate()

  const goBack = () => {
    navigate(path)
  }

  return (
    <BackButtonStyled onClick={goBack}>
      ←
    </BackButtonStyled>
  );
};
