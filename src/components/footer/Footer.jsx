import React from "react";
import {
  StyledFooter,
  StyledImg,
  StyledContainer,
  StyledContainerTitle,
  MentorContainer,
  Year,
  StyledLink,
  MentorLink,
  MentorText,
  CourseLink,
} from "./styles";
import logo from "../../assets/rs_school_js.svg";

const Footer = () => (
  <StyledFooter>
    <StyledContainer>
      <StyledContainerTitle>Created by</StyledContainerTitle>
      <StyledLink
        href="https://github.com/armonlis"
        target="_blank"
        title="Siarhei Khonski github"
        rel="noreferrer"
      >
        Siarhei Khonski
      </StyledLink>
      <StyledLink
        href="https://github.com/Maslovars"
        target="_blank"
        title="Arseniy Maslov github"
        rel="noreferrer"
      >
        Arseniy Maslov
      </StyledLink>
      <StyledLink
        href="https://github.com/zalart"
        target="_blank"
        title="Artur Zaleuski github"
        rel="noreferrer"
      >
        Artur Zaleuski
      </StyledLink>
      <MentorContainer>
        <MentorText>Mentor</MentorText>
        <MentorLink
          href="https://github.com/tatsmaki"
          target="_blank"
          title="Rastsislau Kharlanau github"
          rel="noreferrer"
        >
          Rastsislau Kharlanau
        </MentorLink>
      </MentorContainer>
    </StyledContainer>
    <Year>2021</Year>
    <CourseLink
      href="https://rs.school/react/"
      target="_blank"
      title="Get more information about course"
      rel="noreferrer"
    >
      <StyledImg src={logo} alt="RSSchool logo" />
    </CourseLink>
  </StyledFooter>
);

export default Footer;
