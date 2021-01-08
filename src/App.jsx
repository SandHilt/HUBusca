import './App.css';
import Search from './Search';
import ListUsers from './ListUsers';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const [isFirstTime, setFirstTime] = useState(true);

  const itensPerPage = 10;

  const [page, SetPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isChangePage, setChangePage] = useState(false);

  const [queryName, setQueryName] = useState('');

  const [userSelected, setUserSelect] = useState('');

  let detailsScreen;

  /**
   * Limpando dados
   */
  function handleClean() {
    setUsers([]);
    setTotalPage(0);
    SetPage(1);
    setQueryName('');
    setFirstTime(true);
  }

  async function handleOctokit() {
    const { Octokit } = await import('@octokit/core');
    // const auth = process.env.REACT_APP_GITHUB_SECRET;
    const octokit = new Octokit();

    return octokit;
  }

  /**
   *
   * @param {string} username
   */
  async function getSpecifyUser(username) {
    const octokit = await handleOctokit();

    const resp = await octokit.request('GET /user', {});

    console.log(resp);
  }

  window.getSpecifyUser = getSpecifyUser;

  /**
   * Busca os usuarios
   */
  const getData = useCallback(async () => {
    console.count('chamou github');

    const octokit = await handleOctokit();

    const resp = await octokit.request(`GET /search/users`, {
      q: queryName,
      per_page: 10,
      page,
    });

    console.log(resp);

    if (isFirstTime) setFirstTime(false);

    setTotalPage(Math.ceil(resp.data.total_count / itensPerPage));

    const data = resp.data.items.map((item) => ({
      photo: item.avatar_url,
      login: item.login,
    }));

    setUsers(data);
  }, [isFirstTime, page, queryName]);

  useEffect(() => {
    if (isChangePage) {
      getData();
      setChangePage(false);
      window.scrollTo(0, 0);
    }
  }, [getData, isChangePage]);

  useEffect(() => {
    if (userSelected !== '') {
      console.log(userSelected);
    }
  }, [userSelected]);

  /**
   * Próxima página
   */
  function nextPage() {
    if (page + 1 <= totalPage) SetPage(page + 1);
    setChangePage(true);
  }

  /**
   * Página anterior
   */
  function backPage() {
    if (page - 1 > 0) SetPage(page - 1);
    setChangePage(true);
  }

  return (
    <>
      <Search
        search={getData}
        onClean={handleClean}
        query={queryName}
        setQuery={setQueryName}
      />
      <ListUsers
        {...{
          users,
          page,
          totalPage,
          isFirstTime,
          nextPage,
          backPage,
          setUserSelect,
        }}
      />
    </>
  );
}

export default App;
