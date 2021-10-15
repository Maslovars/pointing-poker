import styled from "styled-components";
import { theme } from "../../common/theme";

export const LobbyWrapper = styled.div`
  width: 100%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;  
`;
// export const Dashboard = styled.div`
//   width: 90%;
//   min-width: 500px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
// `;
export const Dashboard = styled.div`  
  width: 90%;
  min-width: 500px;
  display: flex;  
  align-items: center;
  justify-content: space-between;   
  ${'' /* position: relative; */}
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;  
  }  
`;

export const StyledDiv = styled.div`  
  align-self: flex-start;
  ${'' /* width: 30%; */}
`;

export const StyledImg = styled.img`  
  position: absolute;
  top: 30px;
  right: 50px;
  transition: ${theme.transition};
  &:hover {
    cursor:pointer;
    transform: scale(1.2);
  }
`


export const plug = "plug";
