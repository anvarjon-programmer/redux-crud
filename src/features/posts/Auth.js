import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [password, setPassword] = useState("");
  const [full_name, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handlePostRequest = (e) => {
    e.preventDefault();

    fetch("http://54.169.228.2:3001/api/auth/signup ", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        full_name: full_name,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then(data => {      
        if(data?.tokens){
            navigate("/users")
        }
        else{
            console.log("Someting went wrong");
        }
      })
  };

 

  return (
    <>
      <form onSubmit={handlePostRequest}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fullname"
          value={full_name}
          onChange={(e) => setFullname(e.target.value)}
        />
        <button type="submit">Yuborish</button>
      </form>
    </>
  );
}

export default Auth;
