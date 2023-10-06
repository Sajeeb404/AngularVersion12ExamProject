import { createAction, props } from "@ngrx/store";
import { FormSkillState, FormBasicInfoState } from "./form-state.interface";



export const formValueChange = createAction(
    "[Form] Value Change",
    props<FormBasicInfoState>()
  );
  
  export const updateValue = createAction(
    "[Form] Update value",
    props<FormSkillState>()
  );