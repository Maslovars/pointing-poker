import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Wrapper } from "./style";
import Issue from "./issue/issue";
import { modeTypes, issueTypes } from "./constants";
export default function Issues(props) {
  const { mode } = props;
  const issues = useSelector((store) => store.appState.issues.issuesSet);
  return (
    <Wrapper id="issues" mode={mode}>
      {issues.map((issue) => (
        <Issue
          key={issue.id}
          type={mode}
          issueId={issue.id}
          title={issue.title}
          name={issue.name}
          link={issue.link}
          priority={issue.priority}
          selected={issue.selected}
        />
      ))}
      {(mode === modeTypes.master || mode === modeTypes.masterGame) && (
        <Issue type={issueTypes.creator} />
      )}
    </Wrapper>
  );
}

Issues.propTypes = {
  mode: PropTypes.string.isRequired,
};
