import User from '../User';
import './style.css';

function ListUsers({ users }) {
  return (
    <ul className='listUsers'>
      {users.map(({ photo, login }, key) => (
        <User {...{ key, photo, login }}></User>
      ))}
    </ul>
  );
}

export default ListUsers;
