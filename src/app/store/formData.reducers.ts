import { Action, createReducer, on } from "@ngrx/store";
import { FormBasicInfoState, FormSkillState, initialBasicState, initialSkillState } from "./form-state.interface";
import {  formValueChange, updateValue } from "./formData.actions";

const formReducer = createReducer(
    initialBasicState,
  on(
    formValueChange,
    (state, { type, ...update }) => {
                console.log('reducer---',update);
                console.log('type---',type);
        return { ...state, ...update }}
  ),
  on(
    updateValue,
    (state, { type, ...update }) => {
                console.log('reducer---',update);
                console.log('type---',type);
        return { ...state, ...update }}
  )
);





const formReducer1 = createReducer(
    initialSkillState,
  on(
    formValueChange,
    (state, { type, ...update }) => {
                console.log('reducer---',update);
                console.log('type---',type);
        return { ...state, ...update }}
  ),
  on(
    updateValue,
    (state, { type, ...update }) => {
                console.log('reducer---',update);
                console.log('type---',type);
        return { ...state, ...update }}
  )
);

export function reducer(state: FormSkillState | undefined, action: Action) {
  return formReducer1(state, action);
}


export function reducer1(state: FormBasicInfoState | undefined, action: Action) {
    return formReducer(state, action);
  }