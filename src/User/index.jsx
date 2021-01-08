import './style.css';

function User({ photo, name, login, location, setUserSelect }) {
  function handleDetails() {
    setUserSelect(login);
  }

  return (
    <li className='userCard'>
      <button
        type='button'
        onClick={handleDetails}
        alt='Clique para ver mais do usuário'
      >
        <img className='avatar' src={photo} alt='Foto de usuario'></img>
      </button>
      {/* <h2>{name}</h2> */}
      <h2>{login}</h2>
      {/* <h2>{location}</h2> */}
    </li>
  );
}

export default User;
