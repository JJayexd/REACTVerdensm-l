import { NavStyled } from "./Nav.Styled";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <NavStyled>
            <ul>
                <li><NavLink to="/" />Home</li>
                <li><NavLink to="/" />Home</li>
                <li><NavLink to="/" />Home</li>
                <li><NavLink to="/" />Home</li>
                <li><NavLink to="/" />Home</li>
            </ul>
        </NavStyled>
    )
}   