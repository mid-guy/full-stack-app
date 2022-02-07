import { useState } from "react";
import TButton from "../../common/button";
import baseAPI from "../../config/baseAPI";
export default function AddTodo() {
  const [ value, setValue ] = useState("");
  
  const changeInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    const post = {
      title: value,
      description: 'add new todo with node js',
      level: 'MEDIUM',
      status: 'PROCESSING',
    }
    baseAPI.post('/api/posts', post).then(res => console.log(res.data))
  }
  
  return (
    <div
      style={{
        display: "flex",
        padding: "10px 15px",
      }}
    >
      <div style={{ marginRight: 25 }}>
        <input
          value={value}
          onChange={changeInput}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      > 
        <TButton onClick={handleSubmit}>
          Add Todo
        </TButton>
      </div>
    </div>
  );
}
