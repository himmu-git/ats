const dataNeeded = [
    {
      docId: 21,
      dataLabel: "Name",
      dataValue: "name",
      isChecked: false,
      errorMsg: "Please enter name. This field is required"
    },
    {
      docId: 31,
      dataLabel: "E-mail",
      dataValue: "email",
      isChecked: false,
      pattern: `^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$`,
      errorMsg: "Please enter a valid email address"
    },
    {
      docId: 41,
      dataLabel: "Phone Number",
      dataValue: "phno",
      isChecked: false,
      errorMsg : "Please enter your phone number. This field is required"
    },
    {
      docId: 42,
      dataValue: "linkdenurl",
      dataLabel: "Linkden Url",
      isChecked: false,
      errorMsg : "Please enter your linkden Url. This field is required"
    },
    {
      docId: 51,
      dataValue: "currentcmp",
      dataLabel: "Current Company",
      isChecked: false,
      errorMsg : "Please enter current company name. This field is required"
    },
  ];

  export default dataNeeded;