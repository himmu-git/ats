export enum ITEM_TYPE  {
    CARD = "card"
}
export enum STAGES {
    APPLIED = "applied",
    ASSESSED = "assessed",
    INTERVIEWED = "interviewed",
    HIRED = "hired",
    REJECTED = "rejected",
  }
  export const STAGES_OF_CANDIDATE = [
    {
      id: "applied",
      key: STAGES.APPLIED,
      label: "Applied",
    },
    {
      id: "assessed",
      key: STAGES.ASSESSED,
      label: "Assessed",
    },
    {
      id: "interviewed",
      key: STAGES.INTERVIEWED,
      label: "Interviewed",
    },
    {
      id: "hired",
      key: STAGES.HIRED,
      label: "Hired",
    },
    {
      id: "rejected",
      key: STAGES.REJECTED,
      label: "Rejected",
    },
  ];    

  export   const radioOptions = [
    {
      id: "remote",
      value: "remote",
      name: "mode",
      label: "Remote",
      isChecked: true,
    },
    {
      id: "in-person",
      value: "in-person",
      name: "mode",
      label: "In - Person",
      isChecked: false,
    },
  ];