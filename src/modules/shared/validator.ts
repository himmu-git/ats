export const requiredValidatorFn = (value) => {
    if (!value) return "This Field is required.";
  };
export const requiredJobTitle = (value) => {
    if (!value) return "Job title is a mandatory field.";
    if(value.length > 30) return "Job title cannot be greater than 30 characters"
  };
export const experienceValidation =  (value) => {
    if (!value) return "Experience is Required";
    if(value < 0) return "Experience cannot be negative"
    if(value > 60) return "Experience cannot be greater than 60"
}