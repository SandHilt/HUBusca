import './style.css';

function User({ photo, name, login, location }) {
  return (
    <li className='userCard'>
      <img className='avatar' src={photo} alt='Foto de usuario'></img>
      {/* <h2>{name}</h2> */}
      <h2>{login}</h2>
      {/* <h2>{location}</h2> */}
      <button className='userBtn' type='button'>
        Ver mais...
      </button>
    </li>
  );
}

export default User;
