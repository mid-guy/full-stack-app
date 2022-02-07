import React, { useState } from "react";
import baseAPI from "../../config/baseAPI";
export default function GroupInput() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    await baseAPI
      .post("/api/auth/login", state)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.accessToken);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ margin: 15 }}>
      <input
        name="username"
        autoComplete="off"
        onChange={handleChangeState}
        value={state.username}
        style={{ marginBottom: 10 }}
      />
      <input
        name="password"
        onChange={handleChangeState}
        value={state.password}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}