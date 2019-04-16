import React from 'react'
import styled from '@emotion/styled'

const InputField = ({ placeholder, onChange, name, type, value }) => (
  <Label htmlFor={name} >
    <input className="input" placeholder="&nbsp;" onChange={onChange}
      name={name}
      type={type}
      value={value}
    />
    <span className="label">{placeholder}</span>
    <span className="Border"></span>
  </Label>
)

export default InputField

const Label = styled.label`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 280px;
  padding: 5px;

  .label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.6rem;
    color: #9098a9;
    font-weight: 500;
    transform-origin: 0 0;
    transition: all 0.2s ease;
    z-index: -1;
  }
  .border {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: #07f;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: all 0.15s ease;
  }
  input {
  -webkit-appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 12px 0;
  height: 7px;
  font-size: 1.6rem;
  font-weight: 500;
  border-bottom: 2px solid #c8ccd4;
  background: none;
  border-radius: 0;
  color: #223254;
  transition: all 0.15s ease;
}
 input:hover {
  background: rgba(34,50,84,0.03);
}
 input:not(:placeholder-shown) + span {
  color: #5a667f;
  transform: translateY(-26px) scale(0.75);
}
 input:focus {
  background: none;
  outline: none;
}
 input:focus + span {
  color: #07f;
  transform: translateY(-26px) scale(0.75);
}
 input:focus + span + .border {
  transform: scaleX(1);
}

`