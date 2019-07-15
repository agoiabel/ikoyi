import { AUTH } from '../constants/Auth.constant';

export const startAuth = payload => ({
    type: AUTH.START,
    payload
});

export const authSuccessful = payload => ({
    type: AUTH.SUCCESSFUL,
    payload
});

export const authUnsuccessful = payload => ({
    type: AUTH.UNSUCCESSFUL,
    payload
});


export const sampleTest = payload => ({
    type: AUTH.SAMPLE_START,
    payload
});


export const sampleTestSuccessful = payload => ({
    type: AUTH.SAMPLE_SUCCESSFUL,
    payload
});