import { HeaderStyled } from "./Header.Styled";
import { Nav } from "../Nav/Nav";
import Logo from "../../Assets/IMG/sdg-logo.svg";

export const Header = () => {
    return (
        <HeaderStyled>
            <img src={Logo} alt="SDG Logo" />
            <Nav>
                
            </Nav>
        </HeaderStyled>
    )
}