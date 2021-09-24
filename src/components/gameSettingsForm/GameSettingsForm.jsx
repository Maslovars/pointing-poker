/* eslint-disable */

import { useFormik } from 'formik';
import React from 'react';
import Input from '../input/Input';
import InputToggle from '../input/InputToggle';
import { StyledForm, StyledHeading, StyledInputGroup, StyledPar, StyledSettingsForm, StyledTimer, StyledTimerInput } from './style';

const GameSettingsForm = ({ getGameSettings }) => {

    const formik = useFormik({
        initialValues: {
            isPlayer: true,
            changingCard: false,
            autoEntrance: true,
            changingDecision: false,
            isTimer: true,
            scoreType: "",
            scoreTypeShort: "",
            minutes: "",
            seconds: ""
        },
        onSubmit: values => {
            getGameSettings({ ...values })
            // console.log(values);
        },
        validate: values => {
            const errors = {};
            if (values.minutes > 100) {
                errors.minutes = "max 99 mins!"
            } else if (values.minutes.length > 2) {
                errors.minutes = "!"
            }
            if (values.seconds > 59) {
                errors.seconds = "!"
            } else if (values.seconds.length > 2) {
                errors.seconds = "!"
            }

            return errors;
        }
    });


    return (
        <StyledSettingsForm>
            <StyledHeading>Game settings:</StyledHeading>
            <StyledForm onSubmit={formik.handleSubmit}>
                <StyledInputGroup>
                    <StyledPar>Scrum master as player:</StyledPar>
                    <InputToggle
                        name="isPlayer"
                        id="isPlayer"
                        onChange={formik.handleChange}
                        checked={formik.values.isPlayer} />
                </StyledInputGroup>
                <StyledInputGroup>
                    <StyledPar>Changing card in round end:</StyledPar>
                    <InputToggle
                        name="changingCard"
                        id="changingCard"
                        onChange={formik.handleChange}
                        checked={formik.values.changingCard} />
                </StyledInputGroup>
                <StyledInputGroup>
                    <StyledPar>Automatic entrance to the lobby:</StyledPar>
                    <InputToggle
                        name="autoEntrance"
                        id="autoEntrance"
                        onChange={formik.handleChange}
                        checked={formik.values.autoEntrance} />
                </StyledInputGroup>
                <StyledInputGroup>
                    <StyledPar>Changing decision after voting end:</StyledPar>
                    <InputToggle
                        name="changingDecision"
                        id="changingDecision"
                        onChange={formik.handleChange}
                        checked={formik.values.changingDecision} />
                </StyledInputGroup>
                <StyledInputGroup>
                    <StyledPar>Is timer needed:</StyledPar>
                    <InputToggle
                        name="isTimer"
                        id="isTimer"
                        onChange={formik.handleChange}
                        checked={formik.values.isTimer} />
                </StyledInputGroup>
                <StyledInputGroup>
                    <StyledPar>Score type:</StyledPar>
                    <Input
                        id="scoreType"
                        name="scoreType"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.scoreType}
                        required />
                </StyledInputGroup>
                <StyledInputGroup>
                    <StyledPar>Score type (Short):</StyledPar>
                    <Input
                        id="scoreTypeShort"
                        name="scoreTypeShort"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        required />
                </StyledInputGroup>
                {formik.values.isTimer && <StyledInputGroup>
                    <StyledPar>Round time:</StyledPar>
                    <StyledTimer>
                        <StyledTimerInput
                            id="minutes"
                            name="minutes"
                            type="number"
                            placeholder="0"
                            onChange={formik.handleChange}
                            value={formik.values.minutes} />
                        <StyledPar font="big">:</StyledPar>
                        <StyledTimerInput
                            id="seconds"
                            name="seconds"
                            type="number"
                            placeholder="0"
                            onChange={formik.handleChange}
                            value={formik.values.seconds} />
                    </StyledTimer>
                </StyledInputGroup>}
                <button type="submit">Submit</button>
            </StyledForm>
        </StyledSettingsForm>
    )
};

export default GameSettingsForm;
