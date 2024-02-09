import { FormEventHandler, useState } from "react";

import { TextInput } from "./text_input";
import { NewUserModel } from "../../models/usersModel";
import "./form_styles.css";

export const NewUserForm = () => {
  const [inputs, setInputs] = useState<NewUserModel>({
    name: undefined,
    username: undefined,
    email: undefined,
    coverImageUrl: undefined,
    profileImageUrl: undefined,
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/users/create/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
      })
      .then(() => {
        console.log("We'll be in touch soon.");
      })
      .catch((err) => {
        console.log(err.toString());
      });
  };

  return (
    <div className="form-container">
        <h2>New User Form</h2>
      <form className="new-user-form" onSubmit={handleSubmit}>
        <label>
          <span>Enter your Name:</span>
          <TextInput
            fieldName="name"
            fieldValue={inputs.name || ""}
            onChangeSetInputs={setInputs}
          />
        </label>
        <label>
          <span>Enter your Username:</span>
          <TextInput
            fieldName="username"
            fieldValue={inputs.username || ""}
            onChangeSetInputs={setInputs}
          />
        </label>
        <label>
          <span>Enter your Email:</span>
          <TextInput
            fieldName="email"
            fieldValue={inputs.email || ""}
            onChangeSetInputs={setInputs}
          />
        </label>
        <label>
          <span>Enter your CoverImageUrl:</span>
          <TextInput
            fieldName="coverImageUrl"
            fieldValue={inputs.coverImageUrl || ""}
            onChangeSetInputs={setInputs}
          />
        </label>
        <label>
          <span>Enter your ProfileImageUrl:</span>
          <TextInput
            fieldName="profileImageUrl"
            fieldValue={inputs.profileImageUrl || ""}
            onChangeSetInputs={setInputs}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
