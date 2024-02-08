export const validateField = (fieldName: string, fieldValue: string) => {
  console.log("---->", fieldName);

  if (fieldName === "name") return validateNameField(fieldValue);
  if (fieldName === "username") return validateUsernameField(fieldValue);
};
/*
 * NAME field should contain only letters and spaces. No special charecters are allowed
 * and the field should not be empty and minimun length required be 5 characters
 */
const validateNameField = (fieldValue: string) => {
  const error = [];
  let length = 0;
  const isOnlyAlphabets = /^[A-Za-z\s]+$/g.test(fieldValue);
  if (isOnlyAlphabets) {
    length = fieldValue.length;
  } else {
    error.push("No numbers or special charecters are allowed");
  }
  if (!(length > 5) && isOnlyAlphabets) {
    error.push("Charactes length must be greater than 5");
  }
  return error;
};

/*
 * UserNAME field can contain letters, numbers and special characters like _. No other special charecters are allowed
 * and the field should not be empty and minimun length should be 5 characters
 */
const validateUsernameField = (fieldValue: string) => {
  const error: Array<string> = [];
  let length = 0;
  const isValidUsername = /([A-Z0-9])\w+/g.test(fieldValue);

  isValidUsername
    ? (length = fieldValue.length)
    : error.push(
        "Username shouls only contain alphabets and numbers and underscores"
      );

  if (!(length > 5) && isValidUsername) {
    error.push("Charactes length must be greater than 5");
  }
  return error;
};
