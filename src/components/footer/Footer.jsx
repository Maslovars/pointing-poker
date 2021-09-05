import {
  StyledFooter,
  StyledImg,
  StyledContainer,
  StyledContainerTitle,
  MentorContainer,
  Year
} from "./styles";
import logo from './rs_school_js.svg';

const Footer = (props) => {
  return (
    <StyledFooter {...props}>
      <StyledContainer>
        <StyledContainerTitle {...props}>created by</StyledContainerTitle>
        <a href='https://github.com/armonlis' target='_blank' title='Siarhei Khonski github' rel='noreferrer'>Siarhei Khonski</a>
        <a href='https://github.com/Maslovars' target='_blank' title='Arseniy Maslov github' rel='noreferrer'>Arseniy Maslov</a>
        <a href='https://github.com/zalart' target='_blank' title='Artur Zaleuski github' rel='noreferrer'>Artur Zaleuski</a>
        <MentorContainer>
          <p>mentor</p>
          <a href='https://github.com/tatsmaki' target='_blank' title='Rastsislau Kharlanau github' rel='noreferrer'>Rastsislau Kharlanau</a>
        </MentorContainer>
      </StyledContainer>
      <Year>2021</Year> 
      <a href='https://rs.school/react/' target='_blank' title='Get more information about course' rel='noreferrer'>
        <StyledImg src={logo} alt='RSSchool logo' />
      </a>
    </StyledFooter>
  )
}

export default Footer;


