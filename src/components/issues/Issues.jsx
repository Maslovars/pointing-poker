import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import { Wrapper } from './style';
import Issue from './issue/issue';
import { modeTypes } from './constants';

export default function Issues(props) {
  const { mode } = props;
  //const issuesArr = useSelector((state) => state.appState.issues.issuesSet)
  return <Wrapper>
    { mode === modeTypes.master && <Issue /> }
  </Wrapper>
}

Issues.propTypes = {
  mode: PropTypes.string.isRequired,
}