import React from 'react';
import PropTypes from 'prop-types'
import { StyledHeader, Logo, StyledText } from "./styles";
import logo from '../../assets/logo-header.png'

export default function Header(props) {
  const {text} = props;
  return (<StyledHeader>
    { text ? <StyledText>{text}</StyledText> : '' }
    <Logo src={logo} alt="logo-image" />
  </StyledHeader>)
}

Header.propTypes = {
  text: PropTypes.string.isRequired
}