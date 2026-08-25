import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const API_URL = "http://localhost:8080/api/users";

  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [editingId, setEditingId] = useState(null);


  // GET - Fetch all users
  const fetchUsers = async () => {

    try {

      const response = await axios.get(API_URL);

      setUsers(response.data);

    } catch (error) {

      console.error("Error fetching users:", error);

    }

  };


  // Run when page loads
  useEffect(() => {

    fetchUsers();

  }, []);


  // POST / PUT - Add or Update
  const addUser = async (event) => {

    event.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      age === ""
    ) {
      return;
    }

    const userData = {
      name: name,
      email: email,
      age: Number(age)
    };


    try {

      // UPDATE
      if (editingId !== null) {

        await axios.put(
          `${API_URL}/${editingId}`,
          userData
        );

        setEditingId(null);

      }

      // CREATE
      else {

        await axios.post(
          API_URL,
          userData
        );

      }


      setName("");
      setEmail("");
      setAge("");

      fetchUsers();

    } catch (error) {

      console.error(
        "Error saving user:",
        error
      );

    }

  };


  // Edit User
  const editUser = (user) => {

    setName(user.name);
    setEmail(user.email);
    setAge(user.age);

    setEditingId(user.id);

  };


  // DELETE User
  const deleteUser = async (id) => {

    try {

      await axios.delete(
        `${API_URL}/${id}`
      );

      fetchUsers();

    } catch (error) {

      console.error(
        "Error deleting user:",
        error
      );

    }

  };


  return (

    <div className="app">

      <div className="container">

        <h1>User Management</h1>


        <form onSubmit={addUser}>

          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
          />


          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />


          <input
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(event) =>
              setAge(event.target.value)
            }
          />


          <button type="submit">

            {editingId !== null
              ? "Update User"
              : "Add User"}

          </button>

        </form>


        <div className="user-list">

          <h2>Users</h2>


          {users.length === 0 ? (

            <p>No users found.</p>

          ) : (

            users.map((user) => (

              <div
                className="user-card"
                key={user.id}
              >

                <div>

                  <h3>{user.name}</h3>

                  <p>{user.email}</p>

                  <p>Age: {user.age}</p>

                </div>


                <div>

                  <button
                    onClick={() =>
                      editUser(user)
                    }
                  >
                    Edit
                  </button>


                  <button
                    onClick={() =>
                      deleteUser(user.id)
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </div>

  );
}

export default App;