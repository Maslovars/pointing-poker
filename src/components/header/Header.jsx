import { StyledHeader, Logo } from "./styles";
import logo from '../../assets/logo-header.png'

export default function Header() {
  return (<StyledHeader>
    <Logo src={logo} alt="logo-image" />
  </StyledHeader>)
}