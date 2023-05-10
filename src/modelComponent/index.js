/* eslint-disable no-undef */

import React from "react";
import "../modelComponent/modelcomp.css";
import NewInputComp from "../Inputcomponent";

import { Modal } from "antd";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

function Modelcomponent({ openmodel, hidemodel, getdatafromuser }) {
  const [userdata, setuserdata] = useState({
    Imageurl: "",
    launchdate: "",
    Title: "",
    Author: "",
  });
  console.log("intinalvalue=", userdata);

  const onsubmit = () => {
    getdatafromuser(userdata);
    setuserdata({
      Imageurl: "",
      launchdate: "",
      Title: "",
      Author: "",
    });
    hidemodel(false);
  };
  const handleClick = () => {
    hidemodel(false);
  };
  const handleChange = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
    // setuserdata({ ...userdata, launchdate: startDate });
  };
  return (
    <div>
      <Modal open={openmodel} Close={hidemodel}>
        <NewInputComp
          label={<p style={{ fontWeight: "500" }}>Image url</p>}
          placeholder="Enter the Title"
          name="Imageurl"
          value={userdata.Imageurl}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <NewInputComp
        label={<p style={{ fontWeight: "500" }}>launchdate</p>}
          className="date_continer"
          type="date"
          value={userdata.launchdate}
          onChange={(date) => {
            setuserdata({ ...userdata, launchdate: date.target.value });
          }}
        />

        <NewInputComp
          label={<p style={{ fontWeight: "500" }}>Title</p>}
          placeholder="Enter the Title"
          name="Title"
          value={userdata.Title}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <NewInputComp
          label={<p style={{ fontWeight: "500" }}>Author</p>}
          placeholder="Enter the Title"
          name="Author"
          value={userdata.Author}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <div className="btn_continer">
          <button
            className="cancel_btn_continer"
            onClick={() => {
              handleClick();
            }}
          >
            cancel
          </button>
          <button
            className="submit_btn_continer"
            onClick={() => {
              onsubmit();
            }}
          >
            submit
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Modelcomponent;
