/*
 * The following Single component `CreateNewUser` had been used for complete form
 * The following code has been splitted into two seperate components later.
 * `new_user_form.tsx` and `text_input.tsx`
 *
 *  I have not deleted this file just use as a backup and for my future reference only
 *
 */

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { validateField } from "./validate_field";
import { ErrorMessage } from "./error_messages";
import { NewUserModel } from "../../models/usersModel";
import "./form_styles.css";

export const CreateNewUser = () => {
  const [inputs, setInputs] = useState<NewUserModel>({
    name: undefined,
    username: undefined,
    email: undefined,
    coverImageUrl: undefined,
    profileImageUrl: undefined,
  });
  const [errors, setErrors] = useState<Array<string> | undefined>();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
    const errorMessages = validateField(name, value);
    setErrors(errorMessages);
  };

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
        //return response.json();
      })
      .then(() => {
        console.log("We'll be in touch soon.");
      })
      .catch((err) => {
        console.log(err.toString());
      });
  };

  return (
    <form className="new-user-form" onSubmit={handleSubmit}>
      <label>
        <span>Enter your Name:</span>
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Enter your username:</span>
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Enter your Email:</span>
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </label>

      <label>
        <span>Enter your coverImageUrl:</span>
        <input
          type="text"
          name="coverImageUrl"
          value={inputs.coverImageUrl || ""}
          onChange={handleChange}
        />
      </label>

      <label>
        <span>Enter your profileImageUrl:</span>
        <input
          type="text"
          name="profileImageUrl"
          value={inputs.profileImageUrl || ""}
          onChange={handleChange}
        />
      </label>
      <ErrorMessage messages={errors} />

      <button type="submit">Submit</button>
    </form>
  );
};
