import './style.css';

function User({ photo, login, getSpecifyUser }) {
  /**
   *
   * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} e
   */
  function handleDetails(e) {
    e.preventDefault();
    getSpecifyUser(login);
  }

  return (
    <li className='userCard'>
      <a
        className='userAvatarAnchor'
        href={`#${login}`}
        onClick={handleDetails}
      >
        <img className='userAvatar' src={photo} alt='Foto de usuario'></img>
      </a>
      <h2>Login: {login}</h2>
    </li>
  );
}

export default User;
