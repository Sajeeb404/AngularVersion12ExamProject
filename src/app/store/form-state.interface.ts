export interface FormBasicInfoState {
    id:number;
    first_name:string;
    last_name:string;
    birth_date:Date;
    phone_number:string;
    gender:string;
  }
  
  export const initialBasicState: FormBasicInfoState = {
      id: 0,
      first_name: "",
      last_name: "",
      birth_date: new Date,
      phone_number: "",
      gender: ""
  };
  

  export interface FormSkillState  {
    skill_name:string;
    experience:string;
    skill_level:string;
  }
  
  export const initialSkillState: FormSkillState = {
      skill_name: "",
      experience: "",
      skill_level: ""
  };
  