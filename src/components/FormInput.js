import { useState } from 'react';
import './styles.css'


const FormInput = (props) => {
  
  const [blur, setBlur] = useState(false);
  const {label, errorMessage, onChange, required, id, ...inputProps} = props;
  return (
    <div className='formInput'>
        <label>{label}</label>
        <input {...inputProps} 
          onChange={onChange} 
          required={required} 
          onBlur={() => setBlur(!blur)} 
          focused={blur.toString()}
          onFocus={() => inputProps.name === 'confirmPassword' && setBlur(true)}
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput;