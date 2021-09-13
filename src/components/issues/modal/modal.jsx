import React, { useState } from 'react';
import { StyledModal, StyledHeader, StyledSelect, SelectContainer, ButtonsContainer } from './style';
import PropTypes from 'prop-types';
import Input from '../../input/Input';
import { priorityTypes } from '../constants';
import Button from '../../button/Button';
import { addNewIssue } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux';

export default function Modal({closeHandler}) {
  const [ state, setState ] = useState({ name: '', link: '', priority: priorityTypes.low })
  const dispatch = useDispatch();
  return <StyledModal closeHandler={closeHandler}>
    <StyledHeader>Create issue:</StyledHeader>
    <Input id='issue-name' text='Title:' fontWeight='bold' width='300px' direction='row' marginTitleR='20px' margin='20px 0px' onChange={(event) => setState({ ...state, name: event.target.value })}/>
    <Input id='issue-link' text='Link:' fontWeight='bold' width='300px' direction='row' marginTitleR='24px' margin='20px 0px' onChange={(event) => setState({ ...state, link: event.target.value })}/>
    <SelectContainer>
      <p>Priority:</p>
      <StyledSelect onChange={(event) => setState({ ...state, priority: event.target.value })}>
        <option value={priorityTypes.low}>{priorityTypes.low.toUpperCase()}</option>
        <option value={priorityTypes.middle}>{priorityTypes.middle.toUpperCase()}</option>
        <option value={priorityTypes.hight}>{priorityTypes.hight.toUpperCase()}</option>
      </StyledSelect>
    </SelectContainer>
    <ButtonsContainer>
      <Button text='Ok' color='white'  onClick={() => {dispatch(addNewIssue(state)); closeHandler()}}/>
      <Button text='Cancel' color='white' onClick={closeHandler} />
    </ButtonsContainer>
  </StyledModal>
}

Modal.propTypes = {
  closeHandler: PropTypes.func.isRequired,
}