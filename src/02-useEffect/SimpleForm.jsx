import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "strider",
    email: "jordi@google.com",
  });

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  const { username, email } = formState;

  useEffect(() => {
    //console.log("useEffect called");
  }, []);
  useEffect(() => {
    //console.log("formState changed");
  }, [formState]);
  useEffect(() => {
    //console.log("email changeds");
  }, [email]);


  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <br></br>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === 'strider2' && <Message></Message>}
    </>
  );
};
