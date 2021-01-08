import User from '../User';
import './style.css';

function ListUsers({ users, totalPage, isFirstTime }) {
  // console.log({ totalPage });

  let nothingToShow;

  if (!isFirstTime && users.length === 0) {
    nothingToShow = (
      <li>
        <em>Sem resultados.</em>
      </li>
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
    </section>
  );
}

export default ListUsers;
