import User from '../User';

function ListUsers({ users }) {
  console.log(users);

  return (
    <ul>
      {users.map(({ photo, login }) => (
        <User photo={(photo, login)}></User>
      ))}
    </ul>
  );
}

export default ListUsers;
