import React, { useState } from "react";
import "./RegistrationForm.css";
import Button from "./Button ";
const RegistrationForm = (props) => {
  const [enteredFullName, SetenteredFullName] = useState("");
  const [entereUserName, SetenteredUserName] = useState("");
  const [enteredEmail, SetenteredEmail] = useState("");
  const [enteredPhoneno, SetenteredPhoneno] = useState("");
  const [enteredpassword, SetenteredPassword] = useState("");
  const [enteredconfirmpassword, SetenteredConfirmPassword] = useState("");

  const FullNameHandler = (event) => {
    SetenteredFullName(event.target.value);
  };
  const UserNameHandler = (event) => {
    SetenteredUserName(event.target.value);
  };
  const EmailHandler = (event) => {
    SetenteredEmail(event.target.value);
  };
  const PhoneNoHandler = (event) => {
    SetenteredPhoneno(event.target.value);
  };
  const PasswordHandler = (event) => {
    SetenteredPassword(event.target.value);
  };
  const ConfirmPasswordHandler = (event) => {
    SetenteredConfirmPassword(event.target.value);
  };
  const FormSubmitHandler = (event) => {
    event.preventDefault();
    const user__details = {
      fullname: enteredFullName,
      username: entereUserName,
      email: enteredEmail,
      phoneno: enteredPhoneno,
      password: enteredpassword,
      confrimpassword: enteredconfirmpassword,
    };
    console.log("enterddretail", user__details);
    props.onAddUser(user__details);
    SetenteredFullName("");
    SetenteredUserName("");
    SetenteredEmail("");
    SetenteredPhoneno("");
    SetenteredPassword("");
    SetenteredConfirmPassword("");
  };
  return (
    <div>
      <div class="container">
        <div class="title">Registration</div>
        <form onSubmit={FormSubmitHandler}>
          <div class="user__details">
            <div class="input__box">
              <span class="details">Full Name</span>
              <input
                type="text"
                placeholder="E.g: Kawaljeet"
                onChange={FullNameHandler}
                value={enteredFullName}
                required
              />
            </div>
            <div class="input__box">
              <span class="details">Username</span>
              <input
                type="text"
                placeholder="Kawal1562"
                onChange={UserNameHandler}
                value={entereUserName}
                required
              />
            </div>
            <div class="input__box">
              <span class="details">Email</span>
              <input
                type="email"
                placeholder="Kawal1562@gmail.com"
                onChange={EmailHandler}
                value={enteredEmail}
                required
              />
            </div>
            <div class="input__box">
              <span class="details">Phone Number</span>
              <input
                type="tel"
                placeholder="99342-27277"
                onChange={PhoneNoHandler}
                value={enteredPhoneno}
                required
              />
            </div>
            <div class="input__box">
              <span class="details">Password</span>
              <input
                type="password"
                placeholder="********"
                onChange={PasswordHandler}
                value={enteredpassword}
                required
              />
            </div>
            <div class="input__box">
              <span class="details">Confirm Password</span>
              <input
                type="password"
                placeholder="********"
                onChange={ConfirmPasswordHandler}
                value={enteredconfirmpassword}
                required
              />
            </div>
          </div>
          <div class="gender__details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />

            <span class="gender__title">Gender</span>
            <div class="category">
              <label for="dot-1">
                <span class="dot one" />
                <span>Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two" />
                <span>Female</span>
              </label>
            </div>
          </div>
          <Button></Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
