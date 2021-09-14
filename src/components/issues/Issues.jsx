import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Wrapper } from './style';
import Issue from './issue/issue';
import { modeTypes, issueTypes } from './constants';
import randomWords from 'random-words';

export default function Issues(props) {
  const { mode } = props;
  const issues = useSelector(store => store.appState.issues.issuesSet);
  return <Wrapper id='issues'>
    { issues.map(issue => <Issue key={randomWords()} type={mode} issueId={issue.id} title={issue.title} name={issue.name} link={issue.link} priority={issue.priority} />) }
    { mode === modeTypes.master && <Issue type={issueTypes.creator}/> }
  </Wrapper>
}

Issues.propTypes = {
  mode: PropTypes.string.isRequired,
}