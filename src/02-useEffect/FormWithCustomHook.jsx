import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const {formState, onInputChange,onResetInputs, username,email,password,setformState} = useForm({
    username:'',
    email:'',
    password:''
  });

  
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
      <br></br>
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-primary mt-4" onClick={onResetInputs}>Reset</button>
    </>
  );
};
