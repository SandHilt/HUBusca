import './style.css';
import { useState,  } from "react";

function Search() {
    const [userName, setUserName] = useState("");

    function handleChange(e) {
        setUserName(e.target.value);
    }


    return <input className="searchUser" onChange={handleChange} value={userName} type="search"></input>
}

export default Search;