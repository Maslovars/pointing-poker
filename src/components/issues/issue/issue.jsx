import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, TextContainer, ButtonsContainer, IssueButton } from './style';
import Modal from '../modal/modal';
import { issueTypes, creatorMode } from '../constants';
import plus from '../../../assets/add-issue.png';

export default function Issue({ type, title, link, priority }) {
  const [ mode, setMode ] = useState(creatorMode.default);
  return <Wrapper>
    <TextContainer type={ type } mode={mode} priority={ priority }>{ type === issueTypes.creator ? 'Create new issue...' : <a href={link} target='_blank' rel="noreferrer" >{title}</a> }</TextContainer>
    <ButtonsContainer>
      { type === issueTypes.creator && <IssueButton type='image' mode={ mode } src={plus} onClick={ () => setMode(creatorMode.createIssue) }/> }
    </ButtonsContainer> 
    { mode === creatorMode.createIssue && <Modal closeHandler={setMode} /> }
    </Wrapper>
}

Issue.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  link: PropTypes.string,
  priority: PropTypes.string,
}

Issue.defaultProps = {
  title: '',
  link: '',
  priority: ''
}