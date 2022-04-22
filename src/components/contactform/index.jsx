import React, { useState } from "react";
import {  useHistory,useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { AddContact } from "../../Redux/Action/ContactAction";
import { getContact,updateContact } from '../../Redux/Action/ContactAction';

import shortid from "shortid";

function ContactForm() {
  let { id } = useParams();
  console.log("id", id);
    let history = useHistory();
    const dispatch = useDispatch();

    const [Name, setName] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [DebitCardNumber, setDebitCardNumber] = useState("");
    const [Gender, setGender] = useState("");
    const getcontactSelector = useSelector((state) => state.contacts.contact)
    console.log("getcontactSelector", getcontactSelector);

    const submitHandler = (e) => {
      e.preventDefault()
 
     const formdata = {
       id: shortid.generate(),
       Name:Name,
       MobileNumber:MobileNumber,
       DebitCardNumber:DebitCardNumber,
       Gender:Gender
     }
     if (id) {
       const formdata = {
        Name:Name,
        MobileNumber:MobileNumber,
        DebitCardNumber:DebitCardNumber,
        Gender:Gender
       }
       dispatch(updateContact(formdata));
       history.push("/ShowContact");
     }
 
     else {
       dispatch(getContact(""));
       dispatch(AddContact(formdata));
       console.log("formdata" + JSON.stringify(formdata));
       history.push("/ShowContact");
     }
   }

  
  return (
    <>
    <div className="container">
    <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">
        Name
      </label>
      <input
        type="text"
        id="Name"
        className="form-control"
        aria-describedby="passwordHelpInline"
        onChange={(e) => setName(e.target.value)}
      />

    </div>
    <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">
        Mobile Number
      </label>
      <input
        type="number"
        id="Mobile Number"
        className="form-control"
        aria-describedby="passwordHelpInline"
        onChange={(e) => setMobileNumber(e.target.value)}
      />

    </div>

    <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">
        Debit Card Number
      </label>
      <input
        type="number"
        id="DebitNumber"
        className="form-control"
        aria-describedby="passwordHelpInline"
        onChange={(e) => setDebitCardNumber(e.target.value)}
      />

    </div>

    <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">
       Gender
      </label>
      <input
        type="text"
        id="gender"
        className="form-control"
        aria-describedby="passwordHelpInline"
        onChange={(e) => setGender(e.target.value)}
      />

    </div>



    <br></br>
    <button className="btn btn-primary" type="submit"
     onClick={submitHandler}>Submit</button>
    </div>
  </>
  );
}

export default ContactForm;