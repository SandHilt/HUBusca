import { useEffect, useState } from 'react';
import './App.css';
import Search from './Search';
import Users from './Users';
// import { Octokit } from "@octokit/core";

function App() {
  const [users, setUsers] = useState([]);

  function handleSearch() {

  }

  useEffect(() => {
    console.dir(users);
  }, [users]);

  return (
    <>
      <Search {...{ handleSearch }} />
      <Users />
    </>
  );
}

export default App;
