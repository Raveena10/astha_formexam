import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { DeleteContact } from '../../Redux/Action/ContactAction';

export default function ShowContact() {
  let history = useHistory();
  const dispatch = useDispatch()

  const submithandler = () => {
    history.push("/contactform");
  }
  // const deleteda = () =>{
  //    dispatch(DeleteContact(contacts.id));
  // }
  const contactSelector = useSelector((state) => state.contacts.contacts)
  console.log("contactSelector test", contactSelector)

  return (
    <div className="container">
      <div className="row d-flex flex-column">

        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">MobileNumber</th>
                <th scope="col">DebitCardNumber</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {contactSelector.map(contacts => (
                <tr>
                  <td>{contacts.id}</td>
                  <td>{contacts.Name}</td>
                  <td>{contacts.MobileNumber}</td>
                  <td>{contacts.DebitCardNumber}</td>
                  <td>{contacts.Gender}</td>
                  <td>

                    <button
                      type="button"
                     onClick={() => dispatch(DeleteContact(contacts.id))}
                      // onClick={deleteda}
                      className="btn btn-sm btn-danger mx-3"
                    >
                      Delete
                    </button>
                    <Link to={`/edit/${contacts.id}`}>
                      <span>edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={submithandler} className="btn btn-outline-dark btn-sm ">Add Contact</button>
        </div>
      </div>
    </div>

  );



}