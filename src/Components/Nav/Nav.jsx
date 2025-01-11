import { NavStyled } from "./Nav.Styled";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <NavStyled>
            <ul>
                <li><NavLink to="/">VERDENSMÅLENE</NavLink></li>
                <li><NavLink to="/education">UNDERVISNING</NavLink></li>
                <li><NavLink to="/" />BYG DIT EGET MÅL</li>
                <li><NavLink to="/" />FAQ</li>
                <li><NavLink to="/" />KONTAKT OS</li>
            </ul>
        </NavStyled>
    )
}  