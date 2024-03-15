function reducer(state: any, action: any) {
    switch (action.type) {
      case "UPDATE_TITLE":
        return { ...state, title: action.value };
      case "UPDATE_EXPERIENCE":
        return { ...state, experience: action.value };
      case "UPDATE_LOCATION":
        return { ...state, location: action.value };
      case "UPDATE_SALARY":
        return { ...state, salary: action.value };
      case "UPDATE_JD":
        return { ...state, jobDescription: action.value };
      case "UPDATE_DOCS_REQ":
        // eslint-disable-next-line no-case-declarations
        let docsArr = [...state.docsNeeded];
        docsArr = docsArr.map((doc) => {
          if (doc.docId == action.value.docId) {
            doc.isChecked = action.value.isChecked;
          }
          return doc;
        });
        return { ...state, docsNeeded: docsArr };
      default:
        return;
    }
  }
export default reducer;