import React, { useState } from "react";

export default function Contacts() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    msg: "",
    error: "all inputs are requred",
  });

  const sendData = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    };
    fetch("http://localhost:3000/contacts", requestOptions)
      .then((response) => response.json())
      .then((data) => alert(data))
      .catch((error) => console.log(" data not send"));
  };

  const valueHandler = (e) => {
    setValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    console.log(value);
  };

  const buttonHandler = () => {
    if (value.name === "" || value.email === "" || value.msg === "") {
      alert(value.error);
    } else {
      console.log(value);
    }
    sendData();
    setValue({
      name: "",
      email: "",
      msg: "",
      error: "all inputs are requred",
    });
  };

  return (
    <div className="page contacts">
      <div className="headerTitle-container">
        <div className="color-ball Contacts"></div>
        <h2 className="Subtitle">Contacts</h2>
      </div>
      <p>FILIPPO GALLIZIA</p>
      <p>LISBOA | PORTUGAL</p>
      <p>galliziafilippo@gmail.com | +351 915 702 684</p>
      <div>
        <h4 className="hfour-contact">
          Want to work together? Just want to say hi? <br></br>
          Drop me a line down here.
        </h4>
        <div className="form-container">
          <input
            className="form-input"
            type="text"
            placeholder="Your Name"
            name="name"
            age="52"
            value={value.name}
            onChange={valueHandler}
          ></input>
          <br />
          <input
            className="form-input"
            type="text"
            placeholder="Your Email"
            name="email"
            value={value.email}
            onChange={valueHandler}
          ></input>
          <br />
          <textarea
            className="form-textarea"
            placeholder="your message!"
            name="msg"
            value={value.msg}
            onChange={valueHandler}
          ></textarea>
          <br />
          <button className="form-button" onClick={buttonHandler}>
            SEND EMAIL
          </button>
        </div>
      </div>
    </div>
  );
}
