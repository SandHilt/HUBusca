import './style.css';

function DetailsUser({ user, setUser }) {
  if (!user) return null;

  let repos;

  if (user.repos.length > 0) {
    const eachRepos = user.repos.map((repo, key) => {
      const dateCreated = new Date(repo.dateCreated).toLocaleString();
      const pushAt = new Date(repo.dateLastPush).toLocaleString();

      return (
        <li {...{ key }}>
          <h4 className='detailsReposName'>
            <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
              {repo.name}
            </a>
          </h4>
          <small>Linguagem: {repo.language}</small>
          <p>{repo.description}</p>
          <p>
            Data de criação: <time>{dateCreated}</time>
          </p>
          <p>
            Último push: <time>{pushAt}</time>
          </p>
        </li>
      );
    });

    repos = <ol className='detailsListRepos'>{eachRepos}</ol>;
  } else {
    repos = <em>Ainda não há repositórios para este usuário.</em>;
  }

  function handleClose() {
    setUser(null);
  }

  return (
    <section className='detailsScreen'>
      <div className='wrapper'>
        <button type='button' onClick={handleClose} className='detailsClose'>
          X
        </button>
        <section className='detailsBody'>
          <img
            className='detailsAvatar'
            src={user.photo}
            alt='Foto do usuário'
          ></img>
          <div className='groupText'>
            <p>ID: {user.id}</p>
            <p>Nome: {user.name}</p>
            <p>Login: {user.login}</p>
            <p>Localização: {user.location}</p>
            <p>Nº seguidores: {user.followers}</p>
            <p>Nº repositórios públicos: {user.public_repos}</p>
          </div>
          <section className='detailsRepos'>
            <h3>Ultímos 30 repositórios ordenados pelo último push:</h3>
            {repos}
          </section>
        </section>
      </div>
    </section>
  );
}

export default DetailsUser;
