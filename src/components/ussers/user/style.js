import styled from "styled-components";
import { theme } from "../../../common/theme";

export const User = styled.div`
  width: 220px;
  height: 70px;
  margin: 5px 5px;
  background-color: ${theme.colors.lightcyan};
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: left;
  filter: drop-shadow(5px 5px ${theme.colors.dimgray});
`;
export const Avatar = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${theme.colors.white};
  border-radius: 50%;
  margin-left: 10px;
  text-align: center;
  font-size: 26px;
  line-height: 50px;
  font-weight: bold;
`;
<<<<<<< HEAD
export const AvatarImage = styled.img`
=======
/* export const AvatarImage = styled.div`
>>>>>>> 1aec01a32b62faf3b0da6f72b9b14573658339f1
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 10px;
<<<<<<< HEAD
`;
=======
` */
export const AvatarImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.green};
  overflow: hidden;
`;

>>>>>>> 1aec01a32b62faf3b0da6f72b9b14573658339f1
export const TextContainer = styled.div`
  width: 130px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  & p {
    margin: 0;
    font-size: 16px;
  }
  & :last-child {
    font-size: 10px;
  }
  & :first-child {
    font-weight: bold;
    font-size: 20px;
  }
`;
export const ImgButton = styled.input`
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
