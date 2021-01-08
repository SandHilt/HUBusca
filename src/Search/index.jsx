import { useEffect, useState } from 'react';
import './style.css';

const MAX_USERS = 5;

function Search({ search, query, setQuery, onClean }) {
  const [lastUsers, setLastUsers] = useState([]);
  const [triggerKey, setTriggerKey] = useState(true);
  const [lastValueSelect, setLastValueSelect] = useState(null);

  /**
   * Evento para popular estado do texto
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  function handleChange(e) {
    if (!triggerKey) setTriggerKey(true);
    setQuery(e.target.value);
  }

  /**
   *
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  function handleSubmit(e) {
    e.preventDefault();
    const lastUsersMemo = lastUsers.slice();

    if (lastUsersMemo.length === MAX_USERS) {
      lastUsersMemo.shift();
    }

    let isDuplicated = false;

    for (let i = 0, j = lastUsersMemo.length; i < j; i++) {
      const saved = lastUsersMemo[i];
      if (saved === query) {
        setLastValueSelect(i);
        isDuplicated = true;
        break;
      }
    }

    if (!isDuplicated) lastUsersMemo.unshift(query.trim());

    setLastUsers(lastUsersMemo);
    search();
  }

  useEffect(() => {
    if (query !== '' && !triggerKey) search();
  }, [query, search, triggerKey]);

  /**
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e
   */
  function handleLastSearch(e) {
    const index = +e.target.value;
    const value = lastUsers[index];
    setQuery(value);
    if (triggerKey) setTriggerKey(false);
  }

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
      <div className='groupLastSearch' hidden={lastUsers.length === 0}>
        <label htmlFor='lastSearch'>Últimos pesquisados</label>
        <select
          id='lastSearch'
          onChange={handleLastSearch}
          defaultValue={lastValueSelect}
        >
          {lastUsers.map((user, key) => {
            return (
              <option value={key} {...{ key }}>
                {user}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
}

export default Search;
