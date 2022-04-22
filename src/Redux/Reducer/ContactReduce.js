const initialstate={
    contacts:[
        {
            id:1,
            Email:"rv@gmail.com",
            Number:"4325354354325"
        },
        {
            id:2,
            Email:"v@gmail.com",
            Number:"2432543253425"
        }
    ]

}

export const ContactReducer = (state=initialstate,action) => 
{
    switch (action.type) {
        case "CREATE_CONTACT":
          {
            console.log("addReducer",action.payload)
            return {
              ...state,
              contacts: [action.payload, ...state.contacts],
            };
          }
          default:
      return state;
                                                                                                                                               
  }                                                                    
}