import './style.css';

function User({ photo, login, setUserSelect, getSpecifyUser }) {
  /**
   *
   * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} e
   */
  async function handleDetails(e) {
    e.preventDefault();
    const details = await getSpecifyUser(login);
    setUserSelect(details);
  }

  return (
    <li className='userCard'>
      {/* <button
        type='button'
        className='userAvatarAnchor'
        onClick={handleDetails}
        alt='Clique para ver mais do usuário'
      > */}
      <a
        className='userAvatarAnchor'
        href={`#${login}`}
        onClick={handleDetails}
      >
        <img className='userAvatar' src={photo} alt='Foto de usuario'></img>
      </a>
      {/* </button> */}
      <h2>Nick: {login}</h2>
    </li>
  );
}

export default User;
