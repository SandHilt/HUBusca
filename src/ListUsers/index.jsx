import User from '../User';
import './style.css';

function ListUsers({ users, totalPage }) {
  // console.log({ totalPage });

  return (
    <section className='listUsersContainer'>
      {/* <h1 className='listUsersTitle'>
        Mostrando apenas 10 usuários por paǵina.
      </h1> */}
      <ul className='listUsers'>
        {users.map(({ photo, login }, key) => (
          <User {...{ key, photo, login }}></User>
        ))}
      </ul>
    </section>
  );
}

export default ListUsers;
