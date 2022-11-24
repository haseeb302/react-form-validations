import FormInput from "./components/FormInput";
import './app.css'
import { useState } from "react";

function App() {

  const [values, setValues] = useState({
    username: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: ''
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter Username",
      errorMessage: "Username should be 3-16 characters long",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      errorMessage: "This doesn't look like an email :(",
      label: "Email",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "",
      errorMessage: "",
      label: "Date of Birth"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      errorMessage: "The password should be 8 characters long. It should have atleast 1 number and 1 special character",
      label: "Password",
      pattern: `^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+])[A-Za-z\\d][A-Za-z\\d!@#$%^&*()_+]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Enter Confirm Password",
      errorMessage: "Password doesn't match, to set a new one use the previous field :p ",
      label: "Confirm Password",   
      pattern: values.password,
      required: true,   
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div className="app">      
      <form onSubmit={handleSubmit}>
      <h1>Form Practice</h1>
        {inputs?.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange} />
        ))}      
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
