
import React from "react";
import { useState } from "react";
import { ChangeEventHandler } from "react";
import { NewUserModel } from "../../models/usersModel";
import { ErrorMessage } from "./error_messages";
import { validateField } from "./validate_field";
import "./form_styles.css"



interface TextInputProps {
  fieldName: string;
  fieldValue: string;
  onChangeSetInputs: React.Dispatch<React.SetStateAction<NewUserModel>>;
}
export const TextInput: React.FC<TextInputProps> = ({
  fieldName,
  fieldValue,
  onChangeSetInputs,
}) => {
    const [errorMessages,setErrorMessages]=useState<Array<string>>()

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    onChangeSetInputs((values) => ({ ...values, [name]: value }));
    const errors=validateField(fieldName,fieldValue)
    setErrorMessages(errors)
  };
  return (
    <>
      <input
        type="text"
        name={fieldName}
        value={fieldValue}
        onChange={(event) => handleChange(event)}
      />
      <ErrorMessage messages={errorMessages}/>
    </>
  );
};
