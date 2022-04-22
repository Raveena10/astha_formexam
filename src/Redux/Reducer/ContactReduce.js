const initialstate = {
  contacts: [
    {
      id:1,
      Name: "fgfdg",
      MobileNumber: 6464564564,
      DebitCardNumber: "4325354354325",
      Gender:"female"
    },
    {
      id:2,
      Name: "fdgdfdf",
      MobileNumber: 6464564564,
      DebitCardNumber: "4325354354325",
      Gender:"female"
    }
  ]

}

export const ContactReducer = (state = initialstate, action) => {

  switch (action.type) {
    case "CREATE_CONTACT":
      {
        console.log("addReducer", action)
        console.log("state", state)
        return {
          ...state,
          contacts: [action.payload, ...state.contacts],
        };

      }
      case "GET_CONTACT":
      {
        console.log("getconatct", action.payload);
        let arr = state.contacts.filter(
          (contact) => contact.id == action.payload
        );

        arr = arr.values();
        
        for (let val of arr) {
          arr = val;
        }
        console.log("getReducer", arr);
        return {
          ...state,
          contact: arr,
        };

      }
      case "UPDATE_CONTACT": {
        console.log(action.payload);
        console.log("mmm",state.contact);
        return {
          ...state,
          contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
          ),
        };  
        

      }
    case "DELETE_CONTACT":
      {
        console.log("deleteReducer", action)
        console.log("deletestate", state)
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id != action.payload
          ),
        };

      }
    

     
    default:
      return state;

  }
}