import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: ${ props => props.background || 'navy'};
  width: ${ props => props.width || '99vw' };
  height: ${ props => props.height || '8vh' };
  position: absolute;
  bottom: 0;
  left: .5vw;
  color: ${props => props.color || 'white'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > a {
    display: block;
    height: 70%;
    width: auto;
    margin: 0 2%;
    text-decoration: none;
  }
`
const StyledImg = styled.img`
  background-color: white;
  height: 100%;
`
const StyledContainer = styled.div`
  height: 70%;
  width: 50%;
  border: 5px double dimgray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  margin: 0 2%;
  & a {
    font-size: 1.5vmin;
    color: dimgray;
    text-decoration: none;
  }
  & a:hover {
    color: white;
  }
  & > a {
    transform: rotate(-15deg);
  }
`
const MentorContainer = styled.div`
  height: 60%;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & > p {
    font-size: 2vmin;
    margin: 0;
  } 
`
const StyledContainerTitle = styled.p`
  display: block;
  font-size: 2vh;
  position: absolute;
  background-color: ${ props => props.background || 'navy' };
  min-width: 15%;
  left: 40%;
  margin: 0;
  top: -1vh;
`
const Year = styled.p`
  display: block;
  font-size: 3vmin;
  font-weight: bold;
  color: lightgray;
`

export { StyledFooter, StyledImg, StyledContainer, StyledContainerTitle, MentorContainer, Year };