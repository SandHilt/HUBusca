import './style.css';

/**
 *
 * @param {string} photo
 * @param {string} name
 * @param {string} login
 * @param {string} location
 */
function User(photo, name, login, location) {
  return (
    <li>
      <img src={photo} alt='Foto de usuario'></img>
      {/* <h2>{name}</h2> */}
      <h2>{login}</h2>/{/* <h2>{location}</h2> */}
    </li>
  );
}

export default User;
