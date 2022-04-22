import React, { useState } from "react";
import {  useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddContact } from "../../Redux/Action/ContactAction";

function ContactForm() {
    let history = useHistory();
    const dispatch = useDispatch();

    const [Name, setName] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [DebitCardNumber, setDebitCardNumber] = useState("");
    const [Gender, setGender] = useState("");

    const submitHandler=()=>{
        const formdata={
            Name:Name,
            MobileNumber:MobileNumber,
            DebitCardNumber:DebitCardNumber,
            Gender:Gender
        }
        dispatch(AddContact(formdata));
        console.log("form data" + JSON.stringify(formdata))
        history.push("/show")
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