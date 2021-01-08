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
   * @param {React.KeyboardEvent<HTMLInputElement>} e
   */
  function handleKey(e) {
    if (e.code === 'Enter') search();
  }

  return (
    <section className='searchContainer'>
      <input
        onKeyDown={handleKey}
        className='searchBox'
        onChange={handleChange}
        value={query}
        type='search'
        placeholder='Digite um usuário'
        maxLength={255}
      ></input>
      <button className='searchBtn' type='button' onClick={search}>
        Buscar
      </button>
      <button className='searchBtn' type='button' onClick={onClean}>
        Limpar
      </button>
    </section>
  );
}

export default Search;
