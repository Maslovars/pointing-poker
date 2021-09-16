import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Wrapper, TextContainer, ButtonsContainer, IssueButton } from "./style";
import Modal from "../modal/modal";
import { deleteIssue, selectIssue } from "../../../redux/actions/actions";
import { issueTypes, creatorMode } from "../constants";
import plus from "../../../assets/add-issue.png";
import del from "../../../assets/delete-issue.png";
import edit from "../../../assets/edit-card.png";
import sel from "../../../assets/accept-card.png";

export default function Issue({
  type,
  title,
  link,
  priority,
  name,
  issueId,
  selected,
}) {
  const [mode, setMode] = useState(creatorMode.default);
  const dispatch = useDispatch();
  let target = "_blank";
  if (!link) {
    link = "#";
    target = "_self";
  }
  return (
    <Wrapper selected={selected} type={type}>
      <TextContainer type={type} mode={mode} priority={priority}>
        {type === issueTypes.creator ? (
          "Create new issue..."
        ) : (
          <a href={link} target={target} rel="noreferrer" title={name}>
            {title}
          </a>
        )}
      </TextContainer>
      <ButtonsContainer>
        {type === issueTypes.creator && (
          <IssueButton
            type="image"
            mode={mode}
            src={plus}
            onClick={() => setMode(creatorMode.createIssue)}
          />
        )}
        {type === issueTypes.master && (
          <IssueButton
            type="image"
            src={edit}
            onClick={() => setMode(creatorMode.edit)}
          />
        )}
        {type === issueTypes.masterGame && (
          <IssueButton
            issueId={issueId}
            type="image"
            src={sel}
            onClick={() => dispatch(selectIssue(issueId))}
          />
        )}
        {(type === issueTypes.master || type === issueTypes.masterGame) && (
          <IssueButton
            type="image"
            src={del}
            issueId={issueId}
            priority={priority}
            onClick={() => dispatch(deleteIssue({ issueId, priority }))}
          />
        )}
      </ButtonsContainer>
      {mode === creatorMode.createIssue && <Modal closeHandler={setMode} />}
      {mode === creatorMode.edit && (
        <Modal
          mode={creatorMode.edit}
          closeHandler={setMode}
          name={name}
          link={link}
          priority={priority}
          id={issueId}
        />
      )}
    </Wrapper>
  );
}

Issue.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  link: PropTypes.string,
  priority: PropTypes.string,
  name: PropTypes.string,
  issueId: PropTypes.string,
  selected: PropTypes.bool,
};

Issue.defaultProps = {
  title: "",
  link: "",
  priority: "",
  name: "",
  issueId: "",
  selected: false,
};
