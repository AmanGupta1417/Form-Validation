import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Select any");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [dob, setDOB] = useState("");
  const [emptyError, setEmptyError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [username, setUsername] = useState("");
  const [addressError, setaddressError] = useState("");
  const [doberror, setDOBerror] = useState("");
  const validate = () => {
    if (
      name === "" ||
      email === "" ||
      gender === "" ||
      password === "" ||
      phoneNumber === "" ||
      Address === "" ||
      dob === "" 
    ) {
      setEmptyError("All Fields are Mandatory");
      setUsername("");
      return false;
    }
    if (!name.match(/^[A-Za-z0-9- ]/)) {
      setNameError("Name is not alphanumeric");
      setUsername("");
      return false;
    }
    if (!email.includes("@gmail.com")) {
      setEmailError("Must Contain @gmail.com");
      setUsername("");
      return false;
    }
    if (!gender.match(/male|female|other/i)) {
      setGenderError("Please identify as male,female or other");
      setUsername("");
      return false;
    }
    if (password.length < 4) {
      setPasswordError("Password must contain 4 digits");
      setUsername("");
      return false;
    }
    if (!phoneNumber.match(/^[0-9]/)) {
      setPhoneNumberError("Phone Number Must contain only numbers");
      setUsername("");
      return false;
    }
    if (!Address.match(/^[A-Za-z0-9- ]/)) {
      setaddressError("Address is not alphanumeric");
      setUsername("");
      return false;
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
      setDOBerror("Invalid date of birth format. Use YYYY-MM-DD.");
      setDOB("");
      return false;
    }
    return true;
  };
  const resetErrorDefault = () => {
    setNameError("");
    setEmptyError("");
    setEmailError("");
    setGenderError("");
    setPasswordError("");
    setPhoneNumberError("");
    setaddressError("");
    setDOBerror("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    resetErrorDefault();
    const isValid = validate();
    if (isValid) {
      setName("");
      setEmail("");
      setGender("Select Any");
      setPassword("");
      setPhoneNumber("");
      setAddress("");
      setDOB("");
      resetErrorDefault();
      setUsername(name);
    }
  };
  return (
    <div className="App">
      <h1> School Registeration Form </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        {nameError}
        <br />
        <input
          type="text"
          placeholder="Email Id"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        {emailError}
        <br />
        <select
          name="gender"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="Gender" selected>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />
        {genderError}
        <br />
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        {passwordError}
        <br />
        {emptyError}
        <br />
        <input
          type="text"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <br />
        {phoneNumberError}
        <br />
        <input
          type="text"
          placeholder="Address"
          value={Address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />{" "}
        <br />
        {addressError}
        <br />
        <input
          type="text"
          placeholder="DOB"
          value={dob}
          onChange={(e) => {
            setDOB(e.target.value);
          }}
        />{" "}
        <br />
        {doberror}
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div>
        <h2>{username ? "Hello " + username : ""}</h2>
      </div>
    </div>
  );
}

export default App;