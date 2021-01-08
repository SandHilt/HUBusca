import './App.css';
import Search from './Search';
import ListUsers from './ListUsers';
import { Octokit } from '@octokit/core';
import { useState } from 'react';

function App() {
  const octokit = new Octokit();
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const itensPerPage = 10;

  const [page, SetPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const [queryName, setQueryName] = useState('');

  function handleClean() {
    setUsers([]);
    setTotalPage(0);
  }

  /**
   * Busca os usuarios
   */
  async function getData() {
    const resp = await octokit.request(`GET /search/users`, {
      q: queryName,
      per_page: 10,
      page,
    });

    console.log(resp);

    setTotalPage(Math.ceil(resp.data.total_count / itensPerPage));

    const data = resp.data.items.map((item) => ({
      photo: item.avatar_url,
      login: item.login,
    }));

    setUsers(data);
  }

  return (
    <>
      <Search
        search={getData}
        onClean={handleClean}
        query={queryName}
        setQuery={setQueryName}
      />
      <ListUsers {...{ users, totalPage }} />
    </>
  );
}

export default App;
