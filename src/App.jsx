import "./App.css";
import React, { Fragment } from "react";
import List from './component/list'
import TButton from "./common/button";
import GroupInput from "./component/input";
import AddTodo from "./component/addTodo";
import useFetch from "./hooks/useFetch";
import { useRef } from "react";

function addPropertyisEdit(array) {
  return array.map((item) => ({ ...item, isEdit: false }))
}

function App() {
  const { result, fetchData } = useFetch({
    method: 'get',
    query: 'posts',
    params: 'posts',
    middleware: addPropertyisEdit
  })
  function changeInput(e, id) {
    const index = result.findIndex((item) => item._id === id);
    // setResult([
    //   ...result.slice(0, index),
    //   { ...result[index], title: e.target.value },
    //   ...result.slice(index + 1),
    // ]);
  };

  const Todos = (item, index) => {
    return (
      <div
        key={index}
        style={{
          display: "flex",
          padding: "10px 15px",
        }}
      >
        <div style={{ marginRight: 25 }}>
          {item.isEdit ? (
            <input
              value={item.title}
              onChange={(e) => changeInput(e, item._id)}
            />
          ) : (
            item.title
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {!item.isEdit
            ? ["edit", "complete", "delete"].map((mode, index) => (
                <Fragment key={index}>
                  <TButton onClick={() => {}}>
                    {mode}
                  </TButton>
                </Fragment>
              ))
            : ["save", "cancel"].map((mode, index) => (
                <Fragment key={index}>
                  <TButton onClick={() => {}}>
                    {mode}
                  </TButton>
                </Fragment>
          ))}
        </div>
      </div>
    );
  };

  const ref = useRef(null)

  if ( result.isLoading ) {
    return <div style={{ color: 'red', fontSize: 30, display: 'flex', width: '100vw', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>
  }
  
  return (
    <div className="App" ref={ref}>
      <header className="App-header">
        <GroupInput />
        <AddTodo />
        <button onClick={() => fetchData()}>Force Refresh</button>
        <List
          data={result.value}
          render={(item, index) => ({ ...Todos(item, index) })}
        />
      </header>
    </div>
  );
}

export default App;
