import { StyledHeader, Logo, StyledText } from "./styles";
import logo from '../../assets/logo-header.png'

export default function Header(props) {
  return (<StyledHeader>
    { props.text ? <StyledText>{props.text}</StyledText> : '' }
    <Logo src={logo} alt="logo-image" />
  </StyledHeader>)
}