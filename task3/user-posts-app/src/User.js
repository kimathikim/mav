import React, { useState, useEffect } from "react";
import "./User.css";

const User = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const postsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const usersData = await usersResponse.json();
      const postsData = await postsResponse.json();
      setUsers(usersData);
      setPosts(postsData);
    };

    fetchData();
  }, []);

  return (
    <div className="user-container">
      {users.map((user) => {
        const userPosts = posts.filter((post) => post.userId === user.id);
        return (
          <div key={user.id} className="user-card">
            <h4>User: {user.name}</h4>
            <p>Number of Posts: {userPosts.length}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
