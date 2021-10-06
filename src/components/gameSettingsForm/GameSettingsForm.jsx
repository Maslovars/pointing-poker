/* eslint-disable */

import { useFormik } from 'formik';
import React from 'react';
import Input from '../input/Input';
import InputToggle from '../input/InputToggle';
import { StyledError, StyledForm, StyledHeading, StyledInputGroup, StyledPar, StyledSettingsForm, StyledTimer, StyledTimerInput } from './style';
import Button from '../button/Button';

const GameSettingsForm = ({ getGameSettings }) => {

    const formik = useFormik({
        initialValues: {
            isPlayer: true,
            changingCard: false,
            autoEntrance: true,
            changingDecision: false,
            isTimer: false,
            scoreType: "story points",
            scoreTypeShort: "SP",
            minutes: "",
            seconds: ""
        },
        onSubmit: values => {
            getGameSettings({ ...values })
        },
        validate: values => {
            const errors = {};
            if (values.minutes > 30) {
                errors.minutes = "max 30 mins!"
            }
            if (values.seconds > 59) {
                errors.seconds = "Max value 59!"
            }
            if (values.scoreType.length > 20) {
                errors.scoreType = "Score type must contain 1-20 characters"
            }
            if (values.scoreTypeShort.length > 5) {
                errors.scoreTypeShort = "ST(Short) must contain 1-5 characters"
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
                {formik.errors.scoreType ? <StyledError>{formik.errors.scoreType}</StyledError> : null}
                <StyledInputGroup>
                    <StyledPar>Score type (Short):</StyledPar>
                    <Input
                        id="scoreTypeShort"
                        name="scoreTypeShort"
                        value={formik.values.scoreTypeShort}
                        type="text"
                        onChange={formik.handleChange}
                        required />
                </StyledInputGroup>
                {formik.errors.scoreTypeShort ? <StyledError>{formik.errors.scoreTypeShort}</StyledError> : null}
                {formik.values.isTimer && <StyledInputGroup>
                    <StyledPar>Round time:</StyledPar>
                    <StyledTimer>
                        <StyledTimerInput
                            id="minutes"
                            name="minutes"
                            type="number"
                            placeholder="0"
                            onChange={formik.handleChange}
                            value={formik.values.minutes}
                            min="0"
                            max="30" />
                        <StyledPar font="big">:</StyledPar>
                        <StyledTimerInput
                            id="seconds"
                            name="seconds"
                            type="number"
                            placeholder="0"
                            onChange={formik.handleChange}
                            value={formik.values.seconds}
                            min="0"
                            max="59" />
                    </StyledTimer>
                </StyledInputGroup>}
                <Button type="submit" text="Save" />
            </StyledForm>
        </StyledSettingsForm>
    )
};

export default GameSettingsForm;
