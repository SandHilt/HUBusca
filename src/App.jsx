import './App.css';
import Search from './Search';
import DetailsUser from './DetailsUser';
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

  const [userSelected, setUserSelect] = useState(null);

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
    // console.count('chamou usuario spec');

    const octokit = await handleOctokit();

    const respUser = await octokit.request('GET /users/{username}', {
      username,
    });
    // console.log(respUser);

    const respRepo = await octokit.request('GET /users/{username}/repos', {
      username,
      sort: 'pushed',
      per_page: 30,
    });

    // console.log(respRepo);

    const reposFiltered = respRepo.data.map((repo) => {
      return {
        html_url: repo.html_url,
        name: repo.name,
        language: repo.language ?? 'Desconhecido',
        description: repo.description ?? 'Sem descrição',
        dateCreated: repo.created_at,
        dateLastPush: repo.pushed_at,
      };
    });

    const userDataFiltered = {
      photo: respUser.data.avatar_url,
      name: respUser.data.name,
      login: respUser.data.login,
      location: respUser.data.location,
      id: respUser.data.id,
      followers: respUser.data.followers,
      public_repos: respUser.data.public_repos,
      repos: reposFiltered,
    };

    setUserSelect(userDataFiltered);
  }

  /**
   * Busca os usuarios
   */
  const getData = useCallback(async () => {
    // console.count('chamou a pesquisa do github');

    const octokit = await handleOctokit();

    const resp = await octokit.request(`GET /search/users`, {
      q: queryName,
      per_page: 10,
      page,
    });

    // console.log(resp);

    if (isFirstTime) setFirstTime(false);

    setTotalPage(Math.ceil(resp.data.total_count / itensPerPage));

    const dataFiltered = resp.data.items.map((item) => ({
      photo: item.avatar_url,
      login: item.login,
    }));

    setUsers(dataFiltered);
  }, [isFirstTime, page, queryName]);

  useEffect(() => {
    if (isChangePage) {
      getData();
      setChangePage(false);
      window.scrollTo(0, 0);
    }
  }, [getData, isChangePage]);

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
      <DetailsUser user={userSelected} setUser={setUserSelect} />
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
          getSpecifyUser,
        }}
      />
    </>
  );
}

export default App;
