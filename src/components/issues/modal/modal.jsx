import React, { useState } from "react";
import {
  StyledModal,
  StyledHeader,
  StyledSelect,
  SelectContainer,
  ButtonsContainer,
  StyledPar,
} from "./style";
import PropTypes from "prop-types";
import Input from "../../input/Input";
import { priorityTypes, creatorMode } from "../constants";
import Button from "../../button/Button";
import { addNewIssue, replaceIssue } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux";
import randomWords from "random-words";

export default function Modal({
  closeHandler,
  mode,
  name,
  link,
  priority,
  id,
}) {
  let [state, setState] = [undefined, undefined];
  if (mode === creatorMode.edit) {
    [state, setState] = useState({
      name,
      link,
      priority,
      id,
      oldPriority: priority,
      selected: false,
    });
  } else {
    [state, setState] = useState({
      name: "",
      link: "",
      priority: priorityTypes.low,
      id: randomWords({ exactly: 5, join: "" }),
      selected: false,
    });
  }
  const dispatch = useDispatch();
  return (
    <StyledModal closeHandler={closeHandler}>
      <StyledHeader>Create issue:</StyledHeader>
      <Input
        id="issue-name"
        text="Title:"
        defaultValue={name}
        fontWeight="bold"
        width="300px"
        direction="row"
        marginTitleR="20px"
        margin="20px 0px"
        onChange={(event) => setState({ ...state, name: event.target.value })}
      />
      <Input
        id="issue-link"
        text="Link:"
        defaultValue={link}
        fontWeight="bold"
        width="300px"
        direction="row"
        marginTitleR="24px"
        margin="20px 0px"
        onChange={(event) => setState({ ...state, link: event.target.value })}
      />
      <SelectContainer>
        <StyledPar>Priority:</StyledPar>
        <StyledSelect
          defaultValue={priority}
          onChange={(event) =>
            setState({ ...state, priority: event.target.value })
          }
        >
          <option value={priorityTypes.low}>
            {priorityTypes.low.toUpperCase()}
          </option>
          <option value={priorityTypes.middle}>
            {priorityTypes.middle.toUpperCase()}
          </option>
          <option value={priorityTypes.hight}>
            {priorityTypes.hight.toUpperCase()}
          </option>
        </StyledSelect>
      </SelectContainer>
      <ButtonsContainer>
        {mode === creatorMode.edit ? (
          <Button
            text="Ok"
            onClick={() => {
              dispatch(replaceIssue(state));
              closeHandler();
            }}
          />
        ) : (
          <Button
            text="Ok"
            onClick={() => {
              dispatch(addNewIssue(state));
              closeHandler();
            }}
          />
        )}
        <Button text="Cancel" color="white" onClick={closeHandler} />
      </ButtonsContainer>
    </StyledModal>
  );
}

Modal.propTypes = {
  closeHandler: PropTypes.func.isRequired,
  mode: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
  priority: PropTypes.string,
  id: PropTypes.string,
};

Modal.defaultProps = {
  mode: "",
  name: "",
  link: "",
  priority: "",
  id: "",
};
