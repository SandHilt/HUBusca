import './style.css';
import { useState, } from "react";

function Search(handleSearch) {
    const [userName, setUserName] = useState("");

    /**
     * Evento para popular estado do texto
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     */
    function handleChange(e) {
        setUserName(e.target.value);
    }

    return (<>
        <input className="searchUser" onChange={handleChange} value={userName} type="search" placeholder="Digite um usuário"></input>
        <button type="button" onClick={handleSearch}>Buscar</button>
    </>);
}

export default Search;