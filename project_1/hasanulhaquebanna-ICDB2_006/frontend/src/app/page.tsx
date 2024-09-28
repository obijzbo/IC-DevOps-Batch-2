"use client";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    setUsers(data);
  };

  const createUser = async () => {
    setLoading(true);
    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    fetchUsers();
    setLoading(false);
  };

  const updateUser = async (id: string) => {
    setLoading(true);
    await fetch(`http://localhost:3001/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    fetchUsers();
    setLoading(false);
  };

  const deleteUser = async (id: string) => {
    setLoading(true);
    await fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "left" }}>User Form</h1>

      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          border: "1px solid #ddd",
          padding: "10px",
          width: "fit-content",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button
          onClick={createUser}
          style={{ padding: "5px 10px" }}
          disabled={loading}
        >
          {loading ? "Loading..." : "Create User"}
        </button>
      </div>

      <h1 style={{ textAlign: "center" }}>Users List</h1>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {user.name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {user.email}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button
                  onClick={() => updateUser(user.id)}
                  style={{ marginRight: "5px", padding: "5px 10px" }}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Update"}
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  style={{ padding: "5px 10px" }}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
