import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "../components/style.css";

const userProfile = JSON.parse(localStorage.getItem('user'));
const Register = () => {
  const form = useRef();

  const navigate = useNavigate();

  const [input, setInput] = useState({
    date: "",
    tel: "",
    address: "",
  });

  //Local storage
  const handleSubmit = (e) => {
    // Email JS start
    e.preventDefault();
    emailjs.sendForm(
        "service_udr72os",
        "template_97oon0r",
        e.target,
        "bodIECJ7UrGrFBVx7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    // Email JS end

    localStorage.setItem("form", JSON.stringify(input));
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <form ref={form} onSubmit={handleSubmit}>
          <h1>Welcome {userProfile.username}</h1>
          <p>PLEASE FILL THE FORM</p>
          <div>
            <label>Attach Profile</label>
            <input
              name="file"
              value={input.file}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              type="file"
              placeholder="Attach Profile Pic"
              required
            />
          </div>

          <div>
            <label>D.O.B</label>
            <input
              name="date"
              value={input.date}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              type="date"
              required
            />
          </div>

          <div>
            <label>Phone</label>
            <input
              name="tel"
              value={input.tel}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              type="tel"
              placeholder="Enter your Phone No"
              required
            />
          </div>

          <div>
            <label>Address</label>
            <input
              name="address"
              value={input.address}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              type="text"
              placeholder="Enter your Address"
              required
            />
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
