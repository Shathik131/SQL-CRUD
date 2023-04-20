/* import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:5000").then((response) => {
        setUserData(response.data);
        console.log(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/${id}`, id);
      setUserData(userData.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserName</th>
            <th>Password</th>
            <th>Email</th>
            <th>PhoneNumber</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <th>{user.userName}</th>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>

              <td onClick={() => onDelete(user.id)}>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
 */

import React, {useState, useEffect} from 'react'
import axios from "axios"

function Home() {
  const [userData, setUserData] = useState([]);
  
  useEffect(() => {
    try {
      axios.get("http://localhost:5000").then((res) => {
      setUserData(res.data)
    console.log(res.data);
    })
    } catch (error) {
      console.log(error);
    }
  }, [])

  const onDelete = (async(id) => {
    try {
      await axios.delete(`http://localhost:5000/${id}`, id)
      setUserData(userData.filter((user) => user.id !== id))
    } catch (error) {
      console.log(error);
    }
  })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserName</th>
            <th>Password</th>
            <th>Email</th>
            <th>PhoneNumber</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <th>{user.userName}</th>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>

              <td onClick={() => onDelete(user.id)}>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
