import { ContainerStyled } from "./Container.Styled";

export const Container = ({ children, width }) => {
    return (
        <ContainerStyled width={width}>
            {children}
        </ContainerStyled>
    )
}