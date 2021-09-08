import styled from 'styled-components';
import { theme } from '../../common/theme';

export const StyledFooter = styled.div`
  background-color: ${ theme.colors.dark_blue };
  width: ${ props => props.width || '99vw' };
  height: ${ props => props.height || '8vh' };
  margin: 0 auto;
  color: ${ theme.colors.white };
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const StyledLink = styled.a`
  display: block;
  font-size: 1.5vmin;
  color: ${ theme.colors.dimgray };
  text-decoration: none;
  margin: 0 2%;
  transform: rotate(-15deg);
  &:hover {
    color: ${ theme.colors.white };
  }
`
export const MentorLink = styled(StyledLink)`
  transform: none;
`

export const CourseLink = styled(MentorLink)`
  height: 80%;
`

export const StyledImg = styled.img`
  background-color: ${ theme.colors.white};
  height: 100%;
`
export const StyledContainer = styled.div`
  height: 70%;
  width: 55%;
  border: 5px double ${ theme.colors.dimgray};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  margin: 0 2%;
`
export const MentorContainer = styled.div`
  height: 60%;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & > p {
    font-size: 2vmin;
    margin: 0;
  } 
`
export const MentorText = styled.p`
  font-size: 2vmin;
  margin: 0;
`

export const StyledContainerTitle = styled.p`
  display: block;
  font-size: 2vh;
  position: absolute;
  background-color: ${ theme.colors.dark_blue};
  min-width: 15%;
  left: 40%;
  margin: 0;
  top: -1vh;
`
export const Year = styled.p`
  display: block;
  font-size: 3vmin;
  font-weight: bold;
  color: ${ theme.colors.gray};
`