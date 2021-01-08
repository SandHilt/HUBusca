import User from '../User';
import './style.css';

function ListUsers({
  users,
  page,
  totalPage,
  isFirstTime,
  nextPage,
  backPage,
}) {
  let nothingToShow;
  let pagination;

  if (!isFirstTime && users.length === 0) {
    nothingToShow = (
      <li>
        <em>Sem resultados.</em>
      </li>
    );
  }

  if (totalPage > 0) {
    pagination = (
      <section className='listUsersPagination'>
        <button
          type='button'
          disabled={page === 1}
          onClick={backPage}
          className='listUsersBtn'
        >
          Página Anterior
        </button>
        <span>
          {page}/{totalPage}
        </span>
        <button
          type='button'
          disabled={!(page < totalPage)}
          onClick={nextPage}
          className='listUsersBtn'
        >
          Próxima Página
        </button>
      </section>
    );
  }

  return (
    <section className='listUsersContainer'>
      {/* <h1 className='listUsersTitle'>
        Mostrando apenas 10 usuários por paǵina.
      </h1> */}
      <ul className='listUsers'>
        {users.map(({ photo, login }, key) => (
          <User {...{ key, photo, login }}></User>
        ))}
        {nothingToShow}
      </ul>
      {pagination}
    </section>
  );
}

export default ListUsers;
