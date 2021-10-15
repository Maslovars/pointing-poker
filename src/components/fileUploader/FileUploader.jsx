/* eslint-disable */

import { useRef, useState } from "react";
import Button from "../button/Button";
import {Image} from "cloudinary-react";
import {
  StyledAva,
  StyledInitials,
  StyledDiv,
  StyledFileUploader,
  StyledPar,
  StyledGroup,
} from "./style";
import ava from "../../assets/rs_school_js.svg";



const FileUploader = (props) => {

  const [fileInputState, setFileInputState] = useState('');

  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically change behaviour on buttonClick depending on the fileInputState
  const handleSelectSubmitFile = (event) => {
    event.preventDefault();
  // when the Button component is clicked
    !fileInputState && hiddenFileInput.current.click();
    fileInputState && uploadFile(fileInputState);
  }

  // Cloudinary upload file
  const uploadFile = async (file) => {
    const uploadUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`;

    const formData = new FormData();
    formData.append('file', file);

    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
    const response = await fetch(uploadUrl, {
      method: 'post',
      body: formData
    })
    const responseData = await response.json();
    props.setUploadedFile(responseData.public_id);
    setFileInputState('');
  }

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileSelected = event.target.files[0];
    setFileInputState(fileSelected);
  };

  return (
    <StyledFileUploader>
      <StyledPar>Image:</StyledPar>
      <StyledGroup>
        <StyledDiv /* onClick={handleSelectFile} */>{fileInputState ? fileInputState.name : "Choose file"}</StyledDiv>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <Button onClick={handleSelectSubmitFile} height="50px" type="button" text={fileInputState ? "Upload" : "Choose"} />
      </StyledGroup>
      {props.uploadedFile 
      ? <StyledAva><Image cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} publicId={props.uploadedFile} width="83" height="83" crop="fill"/></StyledAva>
      : <StyledAva><StyledInitials>{`${props.firstInitial}${props.lastInitial}`}</StyledInitials></StyledAva>}
    </StyledFileUploader>
  );
};

export default FileUploader;
