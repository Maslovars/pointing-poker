/* eslint-disable */

import { useRef } from "react";
import Button from "../button/Button";
import {
  StyledAva,
  StyledDiv,
  StyledFileUploader,
  StyledPar,
  StyledGroup,
} from "./style";
import ava from "../../assets/rs_school_js.svg";

const FileUploader = (props) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <StyledFileUploader>
      <StyledPar>Image:</StyledPar>
      <StyledGroup>
        <StyledDiv>Choose file</StyledDiv>
        <Button onClick={handleClick} text="Upload" />
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </StyledGroup>
      <StyledAva src={ava} alt="avatar" />
    </StyledFileUploader>
  );
};

export default FileUploader;
