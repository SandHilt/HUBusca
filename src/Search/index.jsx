import './style.css';

function Search({ search, query, setQuery, onClean }) {
  /**
   * Evento para popular estado do texto
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  function handleChange(e) {
    setQuery(e.target.value);
  }

  /**
   *
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  function handleSubmit(e) {
    e.preventDefault();
    search();
  }

  /**
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} e
   */
  // function handleKey(e) {
  //   if (e.code === 'Enter') search();
  // }

  return (
    <form className='searchContainer' method='POST' onSubmit={handleSubmit}>
      <input
        className='searchBox'
        onChange={handleChange}
        value={query}
        type='search'
        placeholder='Digite um usuário'
        maxLength={255}
        minLength={3}
      ></input>
      <div className='searchGroupBtn'>
        <button className='searchBtn' type='submit'>
          Buscar
        </button>
        <button className='searchBtn' type='button' onClick={onClean}>
          Limpar
        </button>
      </div>
      <select className='searchItensPerPage' defaultChecked={10}>
        <option value={10}>10 usuários/página</option>
      </select>
    </form>
  );
}

export default Search;
