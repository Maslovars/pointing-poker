/* eslint-disable */

import { useRef, useState } from "react";
import Button from "../button/Button";
import {Image} from "cloudinary-react";
import {
  StyledAva,
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

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleSelectFile = () => {
    hiddenFileInput.current.click();
  };

  const handleSubmitFile = (event) => {
    event.preventDefault();
    uploadFile(fileInputState);
    console.log('Submitting file:', fileInputState.name)
  }
  // Cloudinary upload file
  const uploadFile = async (file) => {
    const uploadUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`;

    const formData = new FormData();
    formData.append('file', file);
  
    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    const response = await fetch(uploadUrl, {
      method: 'post',
      body: formData
    })
    const responseData = await response.json();
    props.setUploadedFile(responseData.public_id);
  }

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileSelected = event.target.files[0];
    // previewFile(fileSelected);
     setFileInputState(fileSelected);
  };

  return (
    <StyledFileUploader>
      <StyledPar>Image:</StyledPar>
      <StyledGroup>
        <StyledDiv style={{whiteSpace: "nowrap", overflow: "hidden"}} onClick={handleSelectFile}>{fileInputState ? fileInputState.name : "Choose file"}</StyledDiv>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <Button onClick={handleSubmitFile} type="button" text="Upload" />
      </StyledGroup>
      {props.uploadedFile ? <Image cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} publicId={props.uploadedFile} width="83" height="83" crop="scale" style={{  marginTop: 15,
  width: 83,
  height: 83,
  borderRadius: "50%"}}/>
      : <StyledAva src={ava} alt="avatar"/>}
      
    </StyledFileUploader>
  );
};

export default FileUploader;
