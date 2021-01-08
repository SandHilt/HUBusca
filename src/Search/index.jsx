import './style.css';

function Search({ search, query, setQuery }) {
  /**
   * Evento para popular estado do texto
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  function handleChange(e) {
    setQuery(e.target.value);
  }

  /**
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} e
   */
  function handleKey(e) {
    if (e.code === 'Enter') search();
  }

  return (
    <>
      <input
        onKeyDown={handleKey}
        className='searchUser'
        onChange={handleChange}
        value={query}
        type='search'
        placeholder='Digite um usuário'
      ></input>
      <button type='button' onClick={search}>
        Buscar
      </button>
    </>
  );
}

export default Search;
