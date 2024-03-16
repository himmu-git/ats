const reducer = (state, action) => {
    switch (action.key) {
      case "UPDATE_RICH_TXT":
        return { ...state, richTxtArea: action.payload };
        break;
      case "UPDATE_NAME":
        return { ...state, name: action.payload };
        break;
      case "UPDATE_EMAIL":
        return { ...state, email: action.payload };
        break;
      case "UPDATE_PHNO":
        return { ...state, phoneNo: action.payload };
        break;
      case "UPDATE_LINKDEN_URL":
        return { ...state, linkdenUrl: action.payload };
        break;
      case "UPDATE_CURRENT_CMP":
        return { ...state, currentcmp: action.payload };
        break;
  
      default:
        return {...state}
        break;
    }
  };
  export default reducer;