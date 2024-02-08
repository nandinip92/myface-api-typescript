import React from "react";

export const ErrorMessage: React.FC<{ messages: Array<string> }> = ({ messages }) => {
  const length = messages === undefined ? 0 : messages.length;
  return (
    <>
      {length > 0 &&
        messages.map((message,index) => (
          <p key={index} className="error" data-testid="error">
            {message}
          </p>
        ))}
    </>
  );
};
